login ssh @root<ip address>
First fetch origin code from git branch
git fetch origin
git push --set-upstream origin ys_development for push 
or for pull git push --set-upstream origin master
systemctl start nginx or restart nginx
systemctl status ngnix or only status
check port number .env file
pm2 status
then pm2 stop status api(name of the service)
then install run locally using npm start(all good then)
if all good then stop npm start  then run the below cmd
then pm2 start --name api index.js (name of the service and root of file) 
then run cmd:-  pm2 startup ubuntu
then kill the terminal
