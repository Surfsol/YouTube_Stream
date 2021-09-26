pipeline {
    agent any

    stages {

        stage('Test') {
            steps {
                npm 'test -- --updateSnapshot'
                npx 'test'
            }
        }
    }
}