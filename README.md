# Grensesnittdesign

Dette må gjøres for å kunne kjøre prosjektet:

Åpne Terminal/CMD og naviger deg til mappeplasseringen hvor du har lagret prosjektet
- På Mac kan dette gjøres enkelt ved å skrive "cd", uten "", og deretter trekke inn mappen i Terminal vinduet

Når du har navigert deg inn i mappen, skriver du 
```
"npm install"
```
Dette vil installere de fleste nødvendige filer som trengs for prosjektet.

Deretter er det noen ekstra filer som trengs å installeres, ettersom prosjektet er avhengig av disse.
Dette gjøres med følgende kommandoer:

```
npm install @ngx-translate/core --save
```

```
npm install @ngx-translate/http-loader
```

Hvis du får noen feilmeldinger, kan dette løse problemet som har oppstått:

```
npm i rxjs@^6.0 rxjs-compat command
```

Når prosjektet er ferdig bygd med alle de nødvendige filene, kan du se en live preview ved å bruke følgende commando i terminalen
```
ionic serve --lab
```
