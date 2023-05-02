
 <h1>Group members:</h1>

<h2><br>hhennade - Henna Hannila
<br>jjonnai - Jonna Huotari
<br>tommi20128 - Tommi Paakkolanvaara
<br>Haudihou - Joni Huttunen</h2>

<h1>Introduction:</h1>

**Climate Change Visualizer**

**Esittely**

Projekti on luotu Web-ohjelmoinnin Sovellusprojekti -kurssia varten, jossa tavoitteena on luoda ilmastonmuutokseen liittyvän tiedon visualisointityökalu. Projektin vaatimuksiin kuuluu mahdollisuus käyttäjän luomiseen käyttäjänimellä ja salasanalla, käyttäjän kirjautuminen sekä tilin poistaminen. Lisäksi lisäsimme toiminnallisuuksiin myös salasanan vaihdon. Käyttäjän on mahdollista tutkia kuvaajia ilman kirjautumista sekä kirjauduttuaan luoda henkilökohtainen visualisointinäkymä valitsemistaan visualisoinneista. Projektin lopuksi sovellus julkaistaan käytettäväksi julkiseen Internetiin Render-palvelun avulla.  

**Demovideo**

https://www.youtube.com/watch?v=jZRkC9VPi5s

**Toiminnallisuudet**

Ensimmäinen näkymä sivustolla on etusivu (kuva 1). Oletusetusivulla näkyvät V1 – V3 -visualisaatioiden esikatselut. Käyttäjän painaessa yläpalkista ”Change view”-painiketta, näkymäksi vaihtuu V4 – V5-visualisaatiot. Kunkin visualisaation alta löytyy ”Description”-painike, josta käyttäjä halutessaan voi tarkastella kyseessä olevan visualisaation kuvailun ja datojen lähteen.  

![home1climate](https://user-images.githubusercontent.com/112495020/235763939-9f4d849c-ee3c-4348-a149-183b57a2a342.png)

*Käyttäjäkohtaiset toiminnot: Rekisteröityminen, kirjautuminen, salasanan vaihto, tilin poistaminen* 

![climateloginpic](https://user-images.githubusercontent.com/112495020/235764687-f4989ad4-f74a-4324-bdaf-1b31ad136fef.png)

Jos asiakas ei ole kirjautunut sivustolle sisään, painamalla yläpalkista ”Login”-painiketta käyttäjä pääsee alla olevaan näkymään (kuva 2). Jos asiakas ei ole vielä luonut käyttäjätunnusta, se voidaan luoda painamalla ”Register here”. Käyttäjän luomisen onnistumisen jälkeen asiakas ohjataan takaisin kirjautumisnäkymään.  

![loginclimate](https://user-images.githubusercontent.com/112495020/235764000-9b3f1619-2301-43d8-9044-5d688400f5f3.png)

Sisäänkirjautumisen jälkeen asiakkaan on mahdollista muuttaa tilin salasanaa ”Change Password”-näkymän kautta. ”Custom view”-näkymässä asiakas pääsee luomaan omia visualisointinäkymiä, sekä tarkastelemaan jo luotuja näkymiä. ”Delete Account”-näkymässä asiakas pystyy poistamaan tilinsä kirjoittamalla salasanansa oikein. Samalla poistetaan myös kyseiseen tiliin linkitetyt visualisointinäkymät.  

**Teknologiat ja työohjelmat**

Loimme tietokannan PostgreSQL-ohjelmalla. Projektin kehitysympäristönä toimi Visual Studio Code, jossa projektin backend-puoli toteutettiin Java-ohjelmointikielellä ja frontend-puoli React-ohjelmointikielellä. Versionhallintatyökaluna käytimme GitHub-ympäristöä, jonne sovelluskoodit on tallennettu projektille tehtyyn repositorioon (kuva 3). GitHubin kautta käytimme myös Kanban-tyylistä projektisuunnittelua.  

![climaterepopic](https://user-images.githubusercontent.com/112495020/235764237-c2dc147b-5b03-45ff-a8c2-5da52cacae24.png)

*Kuva 5. Kuvassa ryhmän GitHub-repositorio.*  

**Vastuualueet**

Alla kerromme lyhyesti, mitä kukin projektin jäsen teki projektin aikana.   

**Henna Hannila:** Projektin alussa tein projektille pohjan, josta projektia lähdettiin työstämään. Työstin kokonaisuudessaan salasanan vaihdon sekä backendin, että frontendin puolelle. Dataseteistä valmistelin tietokantaan V1:n ja V5:n, lisäksi toteutin näiden tuonnin REST API:iin ja lopulta myös visualisoinnit pohjautuen V1- ja V5-datoihin. Teimme yhdessä Jonnan kanssa mahdollisuuden käyttäjäkohtaisten visualisointinäkymien luomiseen, käyttäjän jo luotujen visualisointinäkymien tarkasteluun sekä yksittäisen visualisointinäkymän tarkasteluun yksilöllisen URL:n kautta.  Lisäksi autoin myös muita projektin jäseniä ongelmatilanteissa sekä vastasin osaltani esittelytekstin kirjoittamisesta. 

**Joni Huttunen:** Vastasin alun perin sovelluksen käyttöliittymän ulkoasusta ja asettelusta, käyttäjän luomisesta sekä käyttäjän sisäänkirjautumisesta. Lisäksi vastuullani oli V2-näkymän luominen tietokantaan sekä sen tuominen käyttöliittymään käyttäjän saataville. Lisäksi vastasin N1- ja N2-näkymien lopullisista asetelmista ja logiikasta. Vastasin myös sovelluksen lataamisesta palvelimelle sekä sovelluksen esittelyvideosta. Osallistuin myös esittelytekstin kirjoittamiseen. 

**Jonna Huotari:** Vastuualueisiini kuului tilin poisto-ominaisuuden toteutus molempien, backend- että frontend- puolen osalta. Visualisoinneista toteutin V3-näkymän, datan tuonnin tietokantaan, yhdistämisen REST API:iin ja itse sovellukseen. Yhdessä Hennan kanssa toteutimme käyttäjäkohtaisten visualisointinäkymien luomisen, luotujen visualisointien tarkastelun, poiston ja yksittäisten visualisointinäkymien tarkastelun URL:n kautta. Olen myös kirjoittanut esittelytekstiä ja työstänyt REST API:iin liittyvän dokumentoinnin stoplight.io-työkalulla. 

**Tommi Paakkolanvaara:** Vastuualueisiini kuului salasanan kryptaaminen ja käyttäjän sisäänkirjautuminen sekä backendin- että frontendin-puolelle. Frontendin puolella vastasin myös navigointipalkin luomisesta. Dataseteistä vastuullani oli V4-tallentaminen tietokantaan, yhdistäminen REST API:iin ja lopulliseen sovellukseen. Vastasin myös testikoodeista sekä sovelluksen responsiivisuudesta. 

**Käyttöönotto**

Kloonaa repo haluamaasi kansioon: git clone https://github.com/TVTKMO22-WP-GROUP-7/react-app.git 

Lataa projektiin tarvittavat riippuvaisuudet: npm install projektin, frontend/ sekä backend/-juuressa. 

Luo PostgreSQL-tietokanta nimelle climateproject (tai muulla nimellä, mutta muuta siinä tapauksessa backend-puolelta application.properties-tiedostosta). Tarvittaessa muokkaa myös postgren käyttäjätunnus ja salasana vastaamaan omaasi. Lisäksi jos käyttämäsi portti on eri kuin projektissa määritelty portti, tulee myös se muuttaa yllä mainitussa tiedostosta, sekä frontendin puolella Constants.json-tiedostossa. 

**Linkki palvelimelle:** Sovellusta ei saatu onnistuneesti palvelimelle 

**Linkki GitHubiin:** https://github.com/TVTKMO22-WP-GROUP-7/react-app 

**Linkki projektin Stoplightiin:** https://projekti2023.stoplight.io/ 

**Linkki käyttöliittymän suunnitteluun (Wireframe):** https://wireframe.cc/pro/pp/58b322e12650968 

<h1>Software interfaces:</h1>

<h2>Log in:</h2>

![loginclimate](https://user-images.githubusercontent.com/112495020/235762082-93405be7-74c1-4cfe-8265-d69d1c675aa5.png)

<h2>Create new account:</h2>

![registerclimate](https://user-images.githubusercontent.com/112495020/235762142-996be653-397a-4646-ac48-9c81c6eadc87.png)

<h2>Homescreen 1:</h2>

![home1climate](https://user-images.githubusercontent.com/112495020/235762213-f9e97398-d124-4a41-a8c0-9a703b4454fe.png)

<h2>Homescreen 2:</h2>

![home2climate](https://user-images.githubusercontent.com/112495020/235762243-12d2c5d8-c54b-4b04-8949-558bedc69f62.png)

<h2>Custom page:</h2>

![custompageclimate](https://user-images.githubusercontent.com/112495020/235762271-56533917-90f8-47e9-8bb1-1a0792ce807c.png)

<h2>Custom views:</h2>

![customviewsclimate](https://user-images.githubusercontent.com/112495020/235762964-fdc8fb4f-a776-450d-9130-af954c884884.png)

<h2>Change password:</h2>

![changepasswordclimate](https://user-images.githubusercontent.com/112495020/235762297-74b5f05e-dc66-4f0f-8ea9-d917fec6fa13.png)

<h2>Delete account:</h2>

![deleteaccclimate](https://user-images.githubusercontent.com/112495020/235762316-a735afd0-8ea7-4179-9fe1-bc72aa5fd874.png)
