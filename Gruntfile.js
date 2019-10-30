module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				files : {
					"output/bimserverapi-%VERSION%.js" : [ "bimserverapipromise.js", "bimserverapiwebsocket.js", "geometry.js", "ifc4.js", "ifc2x3tc1.js", "model.js", "translations_en.js", "bimserverclient.js" ]
				},
			}
		},
		uglify : {
			dist : {
				files : {
					"output/bimserverapi-%VERSION%.min.js" : [ "output/bimserverapi-%VERSION%.js" ]
				}
			}
		},
		copy : {
			main : {
				files : [{
					expand : true,
					src : [ "plugin/*" ],
					dest : "output/"
				}]
			}
		},
		zip: {
			"output/bimserverapi-source-%VERSION%.zip": ["bimserverapipromise.js", "bimserverapiwebsocket.js", "geometry.js", "ifc4.js", "ifc2x3tc1.js", "model.js", "translations_en.js", "bimserverclient.js"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-zip");

	grunt.registerTask("default", [ "concat", "uglify"]);
};