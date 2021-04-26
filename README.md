# Feedmail

WebApp wrote in node js and vanilla js for sending rss via email


1. Tworzymy usługę App Service i konfigurujemy jej wdrożenie przy użyciu actions Github.
![Alt Text](https://github.com/shapovaliuk/feedmail/main/img/appservice1.PNG)
3. Create CosmosDb with mongo client API in version 3.x
4. Wait until provisioning of the services will finish
5. Enter in AppService go to Configuration.
6. You should be seeing *Application settings* and *Connection strings* sections
7. Add two environment variables in section *Application settings*
- NODE_ENV with value production
- NODE_CONFIG with value

      {
          "feedmail": {
              "db": {
                  "url": "", 
                  "name": "prod", 
                  "options": {
                  "useUnifiedTopology": true 
                  }
              },
              "logger": {
                  "level": "debug",
                  "filename": "./backend.log"
              },
              "mailgun": {
                  "domain": "",
                  "apiKey": ""
              }  
          }
      }

**Remark**

Notice there are empty fields in this config:
- url - you need to copy-paste the connection string of the newly created CosmosDb. The connection string is visible in the Configuration section in the CosmosDb,
- apiKey - you need to create an account in mailgun portal. You will get an API key after login into mailgun portal,
- domain - if you don't have a domain you can use the sandbox domain created on mailgun web page. For more info go see mailgun documentation page.
