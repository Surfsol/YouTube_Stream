pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
    }
    post {
        always {
            emailext body: 'Results of Jenkins tests. \n\n ${currentBuild.currentResult} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}', 
                    to: "rterrydeve@gmail.com", 
                    subject: 'Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER'
        }
    }
}