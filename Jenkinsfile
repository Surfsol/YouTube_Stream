pipeline {
    agent any

    stages {

        stage('Test') {
            steps {
                yarn 'test -- --updateSnapshot'
                npx 'test'
            }
        }
    }
}