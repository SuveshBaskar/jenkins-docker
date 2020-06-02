pipeline {
  environment {
    registry = "suveshbaskar/atlantis"
    registryCredential = 'DockerHub'
    dockerImage = ""
  }
  agent any
  stages {
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":v1.5.$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
  }
}