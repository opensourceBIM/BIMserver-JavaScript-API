module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		concat : {
			js : {
				files : {
					"output/bimserverapi-%VERSION%.js" : [ "js/bimserverapipromise.js", "js/bimserverapiwebsocket.js", "js/geometry.js", "js/ifc4.js", "js/ifc2x3tc1.js", "js/model.js", "js/translations_en.js", "js/bimserverclient.js" ]
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
			"output/bimserverapi-source-%VERSION%.zip": ["js/*.js"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-zip");

	grunt.registerTask("default", [ "concat", "uglify"]);
};