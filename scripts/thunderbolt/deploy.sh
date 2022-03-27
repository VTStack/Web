ssh -i "/c/Users/vincent/.ssh/WebServeraws.pem" ec2-user@ec2-16-170-222-121.eu-north-1.compute.amazonaws.com "\
cd Codebase \
git pull \
yarn \
npm run nx -- test thunderbolt \
nx build thunderbolt \
cd dist/apps/thunderbolt
pm2 stop -n thunderbolt
pm2 start ./main.js
"