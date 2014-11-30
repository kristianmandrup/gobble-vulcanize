/*
 *
 * https://github.com/kristianmandrup/gobble-vulcanize
 *
 * Copyright (c) 2014 Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

/*
  - `inputdir` is the path to a directory containing the
    output from the input node (which is `sourceNode`
    in this example)

  - `outputdir` is the path to a directory that this plugin
    must write files to (i.e. the `inputdir` for any
    subsequent transformation)

  - `options` is an object. it is shallow-cloned from the
    user-supplied options object (if none is supplied, it
    will be created as `{}`), so you can modify it safely

  - `callback` must be called once the files have been
    written. If something goes wrong, call it with an
    error object. You can, if you prefer, return a Promise
    rather than using a callback
*/
module.exports = function vulcanize( inputdir, outputdir, options) {
  options = options || {};

  var sander = require( 'sander' );
  var vulcanize = require('vulcanize');

  if ( !options.dest ) {
  	throw new Error( 'You must pass a \'dest\' option to gobble-vulcanize' );
  }

  return sander.lsr( inputdir ).then( function ( allFiles ) {
		var mapSeries = require( 'promise-map-series' ),
			minimatch = require( 'minimatch' ),
			patterns = options.files,
			alreadySeen = {},
			fileContents = [];

		if ( !patterns ) {
			patterns = [ 'index.html' ];
		}

		if ( typeof patterns === 'string' ) {
			patterns = [ patterns ];
		}

		return mapSeries( patterns, function ( pattern ) {
			var filtered = allFiles.filter( function ( filename ) {
				var shouldInclude = !alreadySeen[ filename ] && minimatch( filename, pattern );

				if ( shouldInclude ) {
					alreadySeen[ filename ] = true;
				}

				return shouldInclude;
			});

			return processFiles( filtered.sort( options.sort ) );
		}).then( writeResult );

		function processFiles ( filenames ) {
			return mapSeries( filenames.sort( options.sort ), function ( filename ) {
				return sander.readFile( inputdir, filename ).then( function ( contents ) {

          vulcan.setOptions({inputSrc: contents, outputHandler: writeResult}, function(err) {
            if(err) {
              throw new Error( 'Vulcanize error:' + filename);
            }
            vulcan.processDocument();
          });

				});
			});
		}

		function writeResult (filename, data) {
			return sander.writeFile( outputdir, options.dest, fileContents.join( options.separator || '\n\n' ) );
		}
  });
}
