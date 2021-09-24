pipeline {
    agent any

    stages {

        stage('Test') {

            steps {
                echo 'hellommmmmmm'
                sh "npm install -g yarn"
                sh "yarn test"
            }
        }
    }
}