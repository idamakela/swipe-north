
import agilprojekledare from './images/AgilProjekledare.jpg'
import bistandshandlaggare from './images/Bistandshandlaggare.jpg'
import brandman from './images/Brandman.jpg'
import chiefengineer from './images/ChiefEngineer.jpg'
import forskolarektor from './images/ForskolaRektor.jpg'
import forskollarare from './images/Forskollarare.jpg'
import fullstackutvecklare from './images/Fullstackutvecklare.jpg'
import hotelcleaner from './images/HotelCleaner.jpg'
import kock from './images/Kock.jpg'
import nurse from './images/Nurses.jpg'
import samhallsstrateg from './images/Samhallsstrateg.jpg'
import psykiatri from './images/SommarjobbSocialpshykiatri.jpg'
import vaktmastare from './images/SommarjobbVaktmastare.jpg'
import taxi from './images/TaxiDriver.jpg'

const jobs = [
    {
      id: 1,
      title: "Taxichaufför",
      profesion: "Trasport",
      picture: taxi ,
      area: "Skellefteå",
      iconDescription: {
        transport: true,
        remote: false,
        local: false,
        hybrid: false
      },
      percentajeJob: 100,
      jobbDescription:"Du är en serviceinriktad person som trivs med att möta och samarbeta med nya människor. Du sätter en stor heder i punktlighet och är stolt över att vara en duktig förare.",
      experience:"Lifeskills, knowledge",
      aboutUs:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      contactPerson:{
        contactNamn:"Anne Svensson",
        contactTitle:"",
        contactTelefon:"",
        contactEmail:"Anne.Svensson@skelleftea-taxi.se"
      },
      lastDate: "2023/4/15",
    },
    {
      id: 2,
      title: "Sjuksöterska",
      profesion: "Vård och omsorg",
      picture: nurse,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"100%",
      jobbDescription:"Vi erbjuder dig; ett självständigt och flexibelt arbete där du har stöd av teamet, individuell inskolning efter behov, fortbildning och utvecklingsmöjligheter.",
      experience:"Vi söker dig som är legitimerad sjuksköterska. Har du tidigare erfarenhet av arbete som sjuksköterska är det meriterande. En god ämneskompetens och vilja att hålla dig uppdaterad inom ditt yrkesområde är en förutsättning för att lyckas i rollen.",
      aboutUs:"Skellefteå växer som aldrig förr och våra ambitioner är höga. Som medarbetare inom kommunens hälso- och sjukvård har du ett av de allra viktigaste jobben och befinner dig mitt i utvecklingen. Vi söker nu legitimerade sjuksköterskor för att stärka upp våra arbetslag och för en personcentrerad och hälsofrämjande vård. Annonsen vänder sig till dig som är intresserad tillsvidareanställning, kortare eller längre vikariat. Välkommen med din intresseanmälan!.",
      contactPerson:{
        contactNamn:"Helena Stenmark", 
        contactTitle:"Rekryteringskonsult",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/5/28,
    },
    {  
      id: 3,
      title: "Biståndshandläggare",
      profesion: "Vård och omsorg",
      picture: bistandshandlaggare,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: false,
        hybrid: true
      },
      percentajeJob:"100%",
      jobbDescription:"Som Biståndshandläggare kommer du att utreda och handlägga ansökningar enligt Socialtjänstlagen. Arbetet innebär även samarbete med andra funktioner inom socialtjänsten samt med myndigheter och annan huvudman.",
      experience:"Vi söker dig som har Socionomexamen eller annan lämplig högskoleutbildning samt har goda kunskaper i Socialtjänstlagen.",
      aboutUs:"Socialkontorets medarbetare ger vård, omsorg och stöd till människor i hela Skellefteå. De kan vara äldre, människor med fysisk eller psykisk funktionsnedsättning eller enskilda och familjer i behov av särskilt stöd under en period.Vår verksamhet finns runt om i hela kommunen och hos oss finns specialister inom flera områden inom vård, omsorg, kost, stöd och aktivering för funktionsnedsatta, missbruksvård, familjerådgivning och mycket mer.",
      contactPerson:{
        contactNamn:"Jeanette Nilsson", 
        contactTitle:"Chef Beslutensheten",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/3/31,
     },
    {  
      id: 4,
      title: "Rektor Lejonström anpassad grundskola",
      profesion: "Utbildning",
      picture: forskolarektor ,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: false,
        hybrid: true
      },
      percentajeJob:"100%",
      jobbDescription:"Som rektor ansvarar du för enhetens elever, personal och ekonomi samt för att enhetens verksamhet följs upp och utvärderas. Resultaten ska ge underlag för förnyelse och förbättringar i syfte att öka måluppfyllelse. Som rektor ansvarar du för att undersöka och följa upp i vilken grad eleverna når målen och vid behov göra verksamhetsförändringar.",
      experience:"Vi söker dig som har pedagogisk insikt och har erfarenhet av arbete som chef och skolledare. Du är väl förtrogen med läroplan, skollag och andra styrdokument. Det är meriterande om du har erfarenhet av att leda andra chefer samt om du har en slutförd rektorsutbildning.",
      aboutUs:"Inom avdelning grundskola har vi en ledningsstruktur som består av tretton rektorsområden som delas in i fem samarbetsteam. Varje rektorsområde har en rektor och alla områden har en eller flera biträdande rektorer. Detta skapar förutsättningar för goda samarbeten både i det lokala rektorsområdet samt i samarbetsteamen. Som ledare i Skellefteå kommun har du en viktig roll i en organisation där vi arbetar på invånarnas uppdrag. Här jobbar vi mest av allt för andra och även för varandra.",
      contactPerson:{
        contactNamn:"Henrik Bolin", 
        contactTitle:"Avdelningschef",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/3/31,
     },
    {  
      id: 5,
      title: "Samhällsstrateg",
      profesion: "Administration",
      picture: samhallsstrateg,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: false,
        hybrid: true
      },
      percentajeJob:"100%",
      jobbDescription:"I rollen som samhällstrateg ska du utföra både utredande arbete och leda projekt för planering och samhällsutveckling. Arbetet syftar till att driva olika övergripande utvecklingsfrågor i kommunens verksamhet. Det rör exempelvis befolkningsutveckling, bostadsplanering, infrastrukturfrågor, stads- och landsbygdsutveckling. Arbetet innebär både strategiska och operativa uppgifter för styrning av kommunens avsedda utveckling och dess genomförande.",
      experience:"Vi söker dig med en akademisk utbildning inom samhällsvetenskaplig eller teknisk inriktning. Du har erfarenhet av arbete med samhällsplanering och har i arbetet skapat strukturer kring samhällsplanering med tillhörande rapportering. Du har ett analytiskt perspektiv i tanke och arbete och har erfarenhet av att leda projekt och processer.",
      aboutUs:"Kommunledningskontoret arbetar för att utveckla hela Skellefteå med dialog, samverkan och delaktighet som verktyg. Som samhällsstrateg jobbar du tillsammans med andra strateger, chefer, projektledare och externa parter. Tjänsten är placerad på avdelning för Samhällsutveckling på Kommunledningskontoret.",
      contactPerson:{
        contactNamn:"Lars Hedqvist", 
        contactTitle:"Planeringschef",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/3/26,
     },
    {  
      id: 6,
      title: "Förskollärare",
      profesion: "Utbildning",
      picture: forskollarare,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"100%",
      jobbDescription:"Som förskollärare ansvarar du för att skapa en trygg och pedagogiskt utvecklande miljö för barnen, med en god balans av omsorg och lärande. Du planerar, genomför och utvärderar det pedagogiska arbetet med barnen i fokus. Du har nära samarbete med kollegor, vårdnadshavare och andra samverkansparter.",
      experience:"Du har förskollärarlegitimation och vi ser gärna att du som ännu inte fått din legitimation också söker jobbet. Visa då upp en kvittens från Skolverket. B-körkort är ett krav.",
      aboutUs:"Skellefteå är en stad i framkant och likaså vår förskoleverksamhet. Vi arbetar aktivt med att utveckla förskolans verksamhet för att kvalitetssäkra barns rätt till utveckling och lärande, utifrån ett likvärdigt perspektiv för hela Skellefteå kommun.",
      contactPerson:{
        contactNamn:"Jenny Lundberg", 
        contactTitle:"Rekryteringskonsult",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/3/26,
     },
     {  
      id: 7,
      title: "Kock, Kågeskolan",
      profesion: "restaurang",
      picture: kock,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"100%",
      jobbDescription:"Som kock lagar du riktigt god mat från grunden, så långt det är möjligt. Du utvecklar maten och måltiden i nära samarbete med kollegor, kunder för att våra matgäster alltid ska få en positiv känsla i mötet med oss.",
      experience:"För att jobba som kock behöver du ha restaurangutbildning på gymnasienivå eller motsvarande utbildning. Alternativt har du dokumenterad erfarenhet som kock inom restaurang eller storkök. Vi ser gärna att du har kunskap om både det varma och kalla köket, tillagning och hantering av specialkost, egenkontroll och användning av maskiner i storkök.",
      aboutUs:"Kågeskolan är en skola, med ca 550 elever, från förskoleklass till nian. I det här köket arbetar fem personer. Vi serverar frukost och mellanmål till fritidsbarnen och lunch till samtliga elever på skolan. Vi strävar självklart efter att laga så mycket som möjligt från grunden, göra det lilla extra och alltid arbeta efter matgästernas efterfrågan",
      contactPerson:{
        contactNamn:"Peter Gustafsson", 
        contactTitle:"Enhetschef",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/4/2,
     },
     {  
      id: 8,
      title: "Agil projektledare",
      profesion: "It-support",
      picture: agilprojekledare,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: false,
        hybrid: true
      },
      percentajeJob:"100%",
      jobbDescription:"Ditt huvudsakliga uppdrag är att driva projekt och stötta kollegor i olika sammanhang. Du utför och leder projekten enskilt eller tillsammans med en biträdande projektledare beroende på omfattning, som kan vara allt från små projekt på 100 timmar till en budget på över 40 miljoner med hundratals personer involverade. Ditt ansvar börjar vanligtvis vid dialog med beställaren och pågår till dess att avslutskriterierna uppfyllts. Utöver projektledning kommer du även att medverka till utveckling av arbetssätt och metoder som förvaltas av projektkontoret.",
      experience:"Vi söker dig som har goda kunskaper om projektplanering, genomförande och uppföljning, men även god förståelse för hur IT-projekt kan bedrivas. Vi ser gärna att du har kunskap och erfarenhet av stora organisationer, projektmodeller, agila metoder samt innovationsmetoder. Du har relevant högskoleutbildning och arbetslivserfarenhet som projektledare.",
      aboutUs:"T och verksamhetsutveckling är en del av förvaltningen Support och lokaler, som är kommunens interna servicecenter. Avdelningen gör just nu stora satsningar med att möta medborgarnas och verksamheternas behov av digitalisering. Med målet att bli en mer datadriven och innovativ organisation gör vi nu stora satsningar inom informationsförsörjning och automation.",
      contactPerson:{
        contactNamn:"Henrik Näslund",
        contactTitle:"Chef Projektkontoret",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/4/10,
     },
     {  
      id: 9,
      title: "Sommarjobb inom socialpsykiatri",
      profesion: "Vård och omsorg",
      picture:psykiatri ,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"50%",
      jobbDescription:"Som stödassistent eller stödpersonal är du en del av personers väg tillbaka till ett självständigt liv. Du planerar tillsammans med personen vilka åtgärder som behövs för att få ett fungerande vardagsliv och arbetar målinriktat med ett återhämtningsperspektiv. Det kan handla om att skapa och träna in rutiner, att ta sociala kontakter eller fritidsaktiviteter. Arbetet innebär samarbete med närstående, resurspersoner och andra arbetsgrupper.",
      experience:"Vi söker personer med olika erfarenheter och bakgrunder. Till stödpersonal söker vi dig som kanske inte hunnit skaffa dig så mycket erfarenhet, men som lockas av att arbeta med människor. Vi söker även dig som studerar eller vill studera till polis, socionom, psykolog eller beteendevetare. För att anställas som stödassistent behöver du ha utbildning inom vård och omsorg eller barn och fritid med inriktning mot pedagogiskt eller socialt arbete.",
      aboutUs:"Socialpsykiatrin erbjuder personer med psykisk ohälsa, neuropsykiatriska funktionsnedsättningar eller lindrig utvecklingsstörning stöd i olika former. Det kan vara i ordinärt boende där vi stöttar personen i sitt egna hem eller i bostad med särskild service vilket är i våra servicehus eller boenden. Läs mer om socialpsykiatrin här: https://skelleftea.se/4.2101356717ee3042be9af9e.html",
      contactPerson:{
        contactNamn:"Camilla Berglund",
        contactTitle:"Rekryteringskonsult",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/4/24,
     },
     {  
      id: 10,
      title: "Sommarjobb - Vaktmästare",
      profesion: "Underhåll",
      picture: vaktmastare,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"75%",
      jobbDescription:"Inför sommaren 2023 söker vi vaktmästare till våra bad-, fritids- och idrottsanläggningar samt till Byske Havsbad och Skellefteå camping.",
      experience:"För att arbeta som vaktmästare krävs att du är praktiskt lagd och allmänt händig. Periodvis har arbetet ett högt tempo och kan vara tungt och fysiskt krävande. Du behöver ha B-körkort och kunna kommunicera obehindrat på svenska.",
      aboutUs:"Hos oss handlar varje arbetsdag om att vi tillsammans vill göra skillnad för de som lever och bor i Skellefteå och vår yttersta ambition är att alla ska ha möjlighet till en meningsfull fritid. Här jobbar vi mest av allt för andra, men även för varandra.",
      contactPerson:{
        contactNamn:"Josef Hedlund", 
        contactTitle:"Rekryteringskonsult",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/5/31,
     },
     {  
      id: 11,
      title: "Brandmän",
      profesion: "Säkerhetsarbete",
      picture: brandman,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"50%",
      jobbDescription:"Att vara brandman innebär att du anställs vid räddningstjänsten i Skellefteå. Räddningstjänsten betalar för den tid som du deltar i utryckningar, övningar och utbildningar. Du får dessutom beredskapsersättning.",
      experience:"Du kan bli brandman (RIB) om: du har fyllt 18 år, du minst har B-körkort, du är frisk och har bra kondition, du bor eller arbetar så att du kan vara på brandstationen inom inställelsetiden, normalt 5 minuter, du klarar våra rekryteringstester, du tycker om att arbeta med människor, du har din arbetsgivares och din familjs medgivande",
      aboutUs:"Räddningstjänsten ingår i förvaltningen samhällsbyggnad. I kommunen finns tio brandstationer och ett räddningsvärn som är placerade runt om i kommunen. Den största brandstationen, där all heltidsanställd personal finns, ligger i centrala Skellefteå.",
      contactPerson:{  
        contactNamn:"Johan Marklund", 
        contactTitle:"Enhetschef",
        contactTelefon:"0910 - 73 50 00",
        contactEmail:""
      },
      lastDate: 2023/8/20,
     },
     {  
      id: 12,
      title: "Hotellstäd",
      profesion: "Restaurang",
      picture: hotelcleaner,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: true,
        hybrid: false
      },
      percentajeJob:"50%",
      jobbDescription:"Nu behöver vi stärka upp sommaren och framåt med riktigt skarpa kollegor.Du bör älska att städa, ha det rent och snyggt och älska att jobba med detaljer. Arbetsuppgifterna går ut på att ta hand om och vårda våra vackra stugor i Lövånger Kyrkstad. Det är ca 60 stugor i olika storlekar och samtliga stugor ser olika ut. Stugorna används som hotellverksamhet, boende för bröllopsgäster, turister och konferensgäster. Detta kräver att man har öga för detaljer och perfektion.",
      experience:"Städare/Lokalvårdare - 1-2 års erfarenhet",
      aboutUs:"Vi på Lövånger Gården, Vi är sommartid runt 20 personer som jobbar med olika delar på hela anläggningen. Vi är medlemmar i Visita och HRF.  ",
      contactPerson:{
        contactNamn:"", 
        contactTitle:"",
        contactTelefon:"",
        contactEmail:"ahlback@lovangergarden.se"
      },
      lastDate: 2023/4/17,
     },
    {  
      id: 13,
      title: "Chief Engineeer Plant & Piping",
      profesion: "konstruktör, tillverkningsindustri",
      picture: chiefengineer,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: false,
        local: false,
        hybrid: true
      },
      percentajeJob:"100%",
      jobbDescription:"Som Chief Engineer kommer du i första hand att leda arbetet med att ta fram funktionella och optimerade layouter till de anläggningar som vi projekterar. Beroende på projektens storlek och omfattning kommer det team du leder att kunna variera från att bara omfatta dig själv, till ett antal konstruktörer",
      experience:"Högskole- eller civilingenjörsexamen med inriktning mot maskinteknik eller likvärdigt. Goda kunskaper i både Svenska och Engelska i tal och skrift.",
      aboutUs:"Vi, Poolia söker vi dig som vill stärka oss som Chief Engineer inom Plant & Piping på Metso Outotec. En spännande roll där du ges ett stort ansvar och får arbeta med varierade projekt inom ett starkt och växande företag. Läs mer om tjänsten via www.arbetsformedlingen.se ",
      contactPerson:{
        contactNamn:"", 
        contactTitle:"Rekryteringskonsult Poolia Sverige AB",
        contactTelefon:"",
        contactEmail:""
      },
      lastDate: 2023/4/23,
     },
    {  
      id: 14,
      title: "Senior fullstackutvecklare",
      profesion: "It-consult",
      picture: fullstackutvecklare,
      area: "Skellefteå",
      iconDescription: {
        transport: false,
        remote: true,
        local: false,
        hybrid: false
      },
      percentajeJob:"100%",
      jobbDescription:"Tillbaka får du som söker till oss ett engagerat, genuint och personligt bemötande samt en stor nyfikenhet kopplat såväl till dig som person som kopplat till dig som yrkesutövare. Vi är helt enkelt Sveriges mest personliga konsultföretag och det är vi stolta över!",
      experience:"I denna roll söker vi dig som har erfarenhet av att ha utfört komplexa uppdrag i minst nio år. Har minst fem års erfarenhet av arbete med videomotorer och implementation av videokonversation/videomöten. Har minst fem års erfarenhet av frontendutveckling, backendutveckling och uppbyggnad av API:er. Mycket goda kunskaper i svenska i tal och skrift. Det är bra om du har arbetat med t.ex. WebRTC/Vonage, OpenShift samt Angular och React.",
      aboutUs:"På PersonalExpressen gör vi vidare mycket mer än att förmedla konsultuppdrag inom ramarna för vår IT-verksamhet. Vi arbetar även med bemanning av chefer, läkare, sjuksköterskor, lärare och andra samhällsviktiga yrkesgrupper där det offentliga på olika sätt är en central del av vår kundstock. Hjärtligt välkommen till att arbeta som senior fullstackutvecklare tillsammans med oss på PersonalExpressen! PersonalExpressen bemannar med professionella, ambitiösa och jordnära IT-konsulter efter våra kunders behov och önskemål",
      contactPerson:{
        contactNamn:"", 
        contactTitle:"Rekryteringskonsult PersonalExpressen AB",
        contactTelefon:"",
        contactEmail:""
      },
      lastDate: 2023/4/16,
     }
  ]