pipeline{
    agent{
        label "Any"
    }
    parameters{

        string(name: 'SPEC', defaultValue: "cypress/e2e/**/*spec*.{js,ts}", description: "Enter path of SPEC")
        choice(name: 'BROWSER', choices:['chrome','firefox', 'edge'] , description:"Select the browser")
    }

    options{
        ansiColor('xterm')
    }

    stages{
        stage('Building'){
            steps{
                echo('building the app')
            }
            
        }

        stage('Testing'){
            steps{
                sh "npm i"
                sh "npx cypress run --browser=${BROWSER} --spec=${SPEC}"
            }
        }

         stage('deploying'){
            steps{
                echo('deploying the app')
            }
        }
        
    }
}