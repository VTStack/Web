ssh -i "/c/Users/vincent/.ssh/WebServeraws.pem" ec2-user@ec2-16-170-222-121.eu-north-1.compute.amazonaws.com "\
cd Codebase \
git pull \
yarn \
nx affected --target=test \
nx affected --target=build \
nx affected --target=deploy \
"