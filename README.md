# Feedmail

WebApp wrote in node js and vanilla js for sending rss via email


1. Tworzymy usługę App Service i konfigurujemy jej wdrożenie przy użyciu actions Github.
![Alt Text](img/appservice1.png)
![Alt Text](img/deploy.png)

Tutaj znajdziemy url adres naszej strony
![Alt Text](img/appservice2.png)

3. Tworzymy CosmosDb z mongo client API w naszym przypadku w wersji 3.6
![Alt Text](img/cosmos.png)

4. Wchodzimy do actions w repozytorium i naciskamy New Workflow
 ![Alt Text](img/yml.png)
 
 Wybieramy Deploy Node.js to Azure Web App
 ![Alt Text](img/yml2.png)
 
 I u nas się pojawia plik *azure.yml*
 ![Alt Text](img/yml3.png)

5. Wchodzimy do ustawien App Service i dodajemy zmienne środowiskowe w *Application settings*
- NODE_ENV z wartością production
- NODE_CONFIG z wartością :

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
![Alt Text](img/nodeconfig.png)
**Remark**

- url - skopiowaliśmy i wkleiliśmy parametry połączenia nowo utworzonego CosmosDb. Parametry połączenia są widoczne w sekcji Konfiguracja w CosmosDb.
![Alt Text](img/cosmos2.png)

- apiKey - założyliśmy konto w portalu mailgun. Klucz API jest dostępnyz po zalogowaniu się do portalu mailgun.
![Alt Text](img/apikey.png)

- domain - użyliśmy domeny utworzonej na stronie mailgun.
![Alt Text](img/domain.png)

# Testy

*LoadPage*
![Alt Text](img/loadpage1.png)
![Alt Text](img/loadpage2.png)

*GetUser*
![Alt Text](img/getuser1.png)
![Alt Text](img/getuser2.png)

*PostUser*
![Alt Text](img/postuser1.png)
![Alt Text](img/postuser1.png)

*GetMail*
![Alt Text](img/getmail1.png)
![Alt Text](img/getmail2.png)

*PostMail*
![Alt Text](img/postmail1.png)
![Alt Text](img/postmail2.png)
