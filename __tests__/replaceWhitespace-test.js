import {replaceWhitespace} from '../utils/replaceWhitespace-test'

test.todo('converts string "att directv" to "att%20directv"'),
  () => {
    expects(replaceWhitespace('att directv').toBe('att%20directv'));
  };



  
//   post {
//     always {
//         emailext body: "Results of Jenkins tests. \n\n ${currentBuild.currentResult} \n\n -------------------------------------------------- \n${BUILD_LOG, maxLines=100, escapeHtml=false}", 
//                 to: "rterrydeve@gmail.com", 
//                 subject: "Build failed in Jenkins: $PROJECT_NAME - #$BUILD_NUMBER"
//     }
// }