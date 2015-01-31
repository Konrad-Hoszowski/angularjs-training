module.exports = function (grunt) {

    grunt.initConfig({
        simplemocha: {
            src: [
                    'test/**.js'
                ]

        }
    });

    // For this to work, you need to have run `npm install grunt-simple-mocha`
    grunt.loadNpmTasks('grunt-simple-mocha');

    // Add a default task. This is optional, of course :)
    grunt.registerTask('default', 'simplemocha');

};