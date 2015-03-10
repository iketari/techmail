module.exports = function (grunt) {

    grunt.initConfig({
        shell: { 
            server: { /* Подзадача */
                // command: 'bem server -r public_html'
                command: 'node server.js'
                /* запуск сервера */
            }

        } /* grunt-shell */
        ,

        fest: {
            templates: {
                files: [{
                    expand: true,
                    cwd: 'templates',
                    src: '*.xml',
                    dest: 'public_html/js/tmpl'
                }],
                options: {
                    template: function (data) {
                        return grunt.template.process(
                            'define(function () { return <%= contents %> ; });',
                            {data: data}
                        );
                    }
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: [
                    {'public_html/css/main.css': 'public_html/css/main.scss' }
                ],
            }
        },
        watch: {

            fest: {
                files: ['templates/*.xml'],
                tasks: ['fest'],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            },
            server: {
                files: [
                    'public_html/js/**/*.js',
                    'public_html/css/**/*.css'
                ],
                options: {
                    livereload: true
                }
            }
        },
        concurrent: {
            target: ['watch', 'shell'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-sass');


    grunt.registerTask('default', ['concurrent']);

};