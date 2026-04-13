// src/components/ChannelList/ChannelData.js

export const CHANNEL_GROUPS = [
  // ════════════════════════════════════════════════════
  // 1. NORDIC HUB
  // ════════════════════════════════════════════════════
  { 
    id: 1, region: 'nordics', name: 'Sweden Premium 🇸🇪', count: '399+', desc: 'SVT, TV4, C More, Viasat, HBO Max, Allsvenskan', iconType: 'tv',
    searchTerms: 'sweden sverige nordic svt tv4 c more viasat hbo max allsvenskan shl',
    featured: ['SVT1 HD SE', 'TV3 HD SE', 'TV4 HD SE', 'Kanal 5 HD SE', 'TV6 HD SE', 'Sjuan HD SE'],
    fullList: [
      'N1 Info & Updates SE', 'FLYING OVER SWEDEN ULTRA HD SE', 'SVT1 Skåne SE', 'SVT1 FHD SE', 'SVT1 HD SE [-2H]', 
      'SVT2 SE', 'SVT2 HD SE', 'SVT2 FHD SE', 'SVT Barn SE', 'SVT Barn FHD SE', 'SVT24/B HD SE', 
      'SVT Kunskapskanalen SE', 'SVT Kunskapskanalen HD SE', 'SVT Kunskapskanalen FHD SE', 'TV3 SE', 'TV3 FHD SE', 
      'TV4 SE', 'TV4 FHD SE', 'TV4 Fakta SE', 'TV4 Fakta HD SE', 'TV4 Film SE', 'TV4 Film HD SE', 'TV4 Guld SE', 
      'TV4 Guld HD SE', 'Kanal 5 SE', 'Kanal 5 FHD SE', 'TV6 SE', 'TV6 FHD SE', 'Sjuan SE', 'Sjuan FHD SE', 
      'TV8 SE', 'TV8 HD SE', 'TV8 FHD SE', 'Kanal 9 SE', 'Kanal 9 HD SE', 'Kanal 9 FHD SE', 'TV10 SE', 'TV10 HD SE', 
      'TV10 FHD SE', 'Kanal 11 SE', 'Kanal 11 HD SE', 'Kanal 11 FHD SE', 'TV12 SE', 'TV12 HD SE', 'TV12 FHD SE', 
      'N1 Play Box Set FHD SE', 'N1 Play Documentary FHD SE', 'N1 Play Comedy FHD SE', 'N1 Play Comedy UHD SE', 
      'N1 Play Astrid Lindgren FHD SE', 'N1 Play Family Guy FHD SE', 'N1 Play Friends FHD SE', 'N1 Play Two and a Half Men FHD SE', 
      'N1 Play How I Met Your Mother FHD SE', 'N1 Play The Big Bang Theory FHD SE', 'N1 Play Rick and Morty FHD SE', 
      'N1 Play Ridiculousness FHD SE', 'N1 Play Die Hard FHD SE', 'N1 Play The Simpsons FHD SE', 'N1 Play The Office FHD SE', 
      'N1 Play Hobbit & Lord Of The Rings FHD SE', 'N1 Play Harry Potter FHD SE', 'N1 Play James Bond FHD SE', 
      'N1 Play Planet of the Apes FHD SE', 'N1 Play Jönssonligan FHD SE', 'N1 Play Johan Falk FHD SE', 
      'N1 Play Marvel Cinematic Universe FHD SE', 'N1 Play Marvel FHD SE', 'N1 Play DC Universe FHD SE', 
      'N1 Play Fast & Furious FHD SE', 'N1 Play Pirates of the Caribbean FHD SE', 'N1 Play Premiere FHD SE', 
      'N1 Play Action FHD SE', 'N1 Play Horror FHD SE', 'N1 Play Crime FHD SE', 'N1 Play Family FHD SE', 
      'N1 Play Romance FHD SE', 'N1 Paramount Movies FHD SE', 'N1 Paramount Movies 2 FHD SE', 'N1 Play Indie Film FHD SE', 
      'N1 Play Star Wars FHD SE', 'N1 Play Star Trek Original Serie FHD SE', 'N1 Play Svensk Film FHD SE', 
      'N1 Play Stand Up FHD SE', 'N1 Play Beck FHD SE', 'N1 Play Wallander FHD SE', 'N1 Play Christmas FHD SE', 
      'N1 Play Christmas Animated FHD SE', 'N1 Play Disney Jul FHD SE', 'N1 Play South Park FHD SE', 'N1 Play 1990s FHD SE', 
      'N1 Play 1980s FHD SE', 'N1 Play War FHD SE', 'MTV Aitio HD SE', 'TV4 Hits HD SE', 'TV4 Hits FHD SE', 
      'TV4 Stars HD SE', 'TV4 Stars FHD SE', 'Sky ShowTime 1 HD SE', 'Sky ShowTime 1 FHD SE', 'Sky ShowTime 2 HD SE', 
      'Sky ShowTime 2 FHD SE', 'SF-Kanalen SE', 'SF-Kanalen FHD SE', 'E! Entertainment HD SE', 'GodareTV HD SE', 
      'GodareTV FHD SE', 'Food Network FHD SE', 'Fashion TV SE', 'Fashion TV UHD SE', 'TLC HD SE', 'TLC FHD SE', 
      'BBC Nordic HD SE', 'BBC Nordic FHD SE', 'Nautical Channel HD SE', 'Discovery Science HD SE', 'Discovery Science FHD SE', 
      'Discovery Channel SE', 'Discovery Channel HD SE', 'Discovery Channel FHD SE', 'Investigation Discovery HD SE', 
      'Investigation Discovery SE', 'National Geographic HD SE', 'National Geographic FHD SE', 'National Geographic Wild HD SE', 
      'National Geographic Wild FHD SE', 'Wild Earth SE', 'H2 SE', 'H2 FHD SE', 'History HD SE', 'History FHD SE', 
      'Curiosity Stream HD SE', 'Kanal 10 FHD SE', 'Sverigekanalen HD SE', 'Vision Sverige FHD SE', 'Animal Planet SE', 
      'Animal Planet FHD SE', 'Love Nature HD SE', 'Love Nature FHD SE', 'Love Nature 4K/UHD SE', 'Artflix HD SE', 
      'Failarmy International HD SE', 'N1 Music Svensk Hiphop FHD SE', 'N1 Music Boiler FHD SE', 'Trace Urban FHD SE', 
      'MTV HD SE', 'MTV FHD SE', 'MTV 90s SE', 'Philizz I Love The 80s FHD SE', 'N1 Play UMF Miami FHD SE', 
      'N1 Play Tomorrowland FHD SE', 'Stingray iConcerts SE', 'Stingray Djazz SE', 'Mezzo Live FHD SE', 
      'Travel Channel HD SE', 'Travel Channel FHD SE', 'Museum 4K/UHD SE', 'Al Jazeera FHD SE', 'BBC World News SE', 
      'Bloomberg TV FHD SE', 'Bloomberg TV 4K/UHD SE', 'Dagens Industri TV HD SE', 'Dagens Industri TV FHD SE', 
      'CNN International HD SE', 'CNN FHD SE', 'CNBC Europe HD SE', 'CGTN FHD SE', 'CGTN Documentary FHD SE', 
      'DW English HD SE', 'France 24 HD SE', 'Sky News HD SE', 'Expressen TV HD SE', 'SportExpressen TV FHD SE', 
      'TV Malmö HD SE', 'Padel TV 1 FHD SE', 'Padel TV 2 FHD SE', 'LifeStyle TV FHD SE', 'Himlen TV7 HD SE', 
      'Axess TV FHD SE', 'N1 Play Bing FHD SE', 'N1 Play Babblarna HD SE', 'N1 Play Scooby Doo FHD SE', 
      'N1 Play Tom & Jerry FHD SE', 'N1 Play Pokemon Journeys FHD SE', 'N1 Play Barnmusik FHD SE', 'N1 Play Bolibompa FHD SE', 
      'N1 Play Disney Classics FHD SE', 'N1 Play Cartoon FHD SE', 'N1 Play Toon Disney FHD SE', 'N1 Play Doc McStuffins FHD SE', 
      'N1 Play Ice Age FHD SE', 'N1 Play Bluey FHD SE', 'N1 Play Tintin FHD SE', 'N1 Play Disney Pixar FHD SE', 
      'Disney Barn Classic FHD SE', 'Disney Barn 1 HD SE', 'Disney Barn 2 HD SE', 'Disney Barn 3 HD SE', 
      'Disney Barn 4 HD SE', 'Disney Jr SE', 'Disney Jr FHD SE', 'Cartoon Network SE', 'Cartoonito HD SE', 
      'Gabbys Dollhouse FHD SE', 'Moonbug HD SE', 'Nick Jr SE', 'Nick Jr FHD SE', 'Nickelodeon SE', 'Nickelodeon FHD SE', 
      'NickToons SE', 'NickToons HD SE', 'ATG Live HD SE', 'ATG Live FHD SE', 'ATG Swedish Horse Racing SE', 
      'Horse & Country TV SE', 'Outdoor Channel HD SE', 'FUEL TV SE', 'PokerGo HD SE', 'Triton Poker HD SE', 
      'Ridiculousness vs Nya Avsnitt HD SE', 'World Poker Tour FHD SE', 'GINX eSports HD SE', 'Bellator MMA HD SE', 
      'Fight Sports HD SE', 'Eurosport 1 SE', 'Eurosport 1 HD SE', 'Eurosport 1 FHD SE', 'Eurosport 2 SE', 
      'Eurosport 2 HD SE', 'Eurosport 2 FHD SE', 'Motorsport TV FHD SE', 'Formula 1 TV FHD SE', 'Manchester United TV FHD SE', 
      'NFL Network HD SE', 'N1 PPV 1 SE', 'N1 PPV 2 SE', 'N1 PPV 3 SE', 'N1 PPV 4 SE', 'N1 PPV 5 SE', 'N1 PPV 6 SE', 
      'N1 PPV 7 SE', 'N1 PPV 8 SE', 'SVT Play FHD SE', 'TV4 Sportkanalen SE', 'TV4 Sportkanalen HD SE', 
      'TV4 Sportkanalen FHD SE', 'TV4 Fotboll SE', 'TV4 Fotboll HD SE', 'TV4 Fotboll FHD SE', 'TV4 Hockey SE', 
      'TV4 Hockey HD SE', 'TV4 Hockey FHD SE', 'TV4 Motor SE', 'TV4 Motor HD SE', 'TV4 Motor FHD SE', 'TV4 Tennis SE', 
      'TV4 Tennis HD SE', 'TV4 Tennis FHD SE', 'TV4 Sport Live SE', 'TV4 Sport Live HD SE', 'TV4 Sport Live FHD SE', 
      'TV4 Sport Live 2 SE', 'TV4 Sport Live 2 HD SE', 'TV4 Sport Live 2 FHD SE', 'TV4 Sport Live 3 SE', 
      'TV4 Sport Live 3 HD SE', 'TV4 Sport Live 3 FHD SE', 'TV4 Sport Live 4 SE', 'TV4 Sport Live 4 HD SE', 
      'TV4 Sport Live 4 FHD SE', 'V Film Action HD SE', 'V Film Action FHD SE', 'V Film Hits HD SE', 'V Film Hits FHD SE', 
      'V Film Family SE', 'V Film Family HD SE', 'V Film Premiere HD SE', 'V Film Premiere FHD SE', 'V Series HD SE', 
      'V Series FHD SE', 'Viasat Explorer HD SE', 'Viasat Explorer FHD SE', 'Viasat Nature HD SE', 'Viasat Nature FHD SE', 
      'Viasat History HD SE', 'Viasat History FHD SE', 'V Sport Vinter SE', 'V Sport Vinter HD SE', 'V Sport Vinter FHD SE', 
      'V Sport Motor SE', 'V Sport Motor HD SE', 'V Sport Motor FHD SE', 'V Sport Golf SE', 'V Sport Golf HD SE', 
      'V Sport Golf FHD SE', 'vplay Sport SE', 'vplay Sport HD SE', 'vplay Sport FHD SE', 'V Sport Fotboll SE', 
      'V Sport Fotboll HD SE', 'V Sport Fotboll FHD SE', 'V Sport 1 SE', 'V Sport 1 HD SE', 'V Sport 1 FHD SE', 
      'V Sport Extra SE', 'V Sport Extra HD SE', 'V Sport Extra FHD SE', 'V Sport Premium SE', 'V Sport Premium HD SE', 
      'V Sport Premium FHD SE', 'V Sport Ultra 4K SE', 'vplay Fotbollslördag HD SE', 'vplay Event 1 HD SE', 
      'vplay Event 2 HD SE', 'V Sport Live 1 HD SE', 'V Sport Live 2 HD SE', 'V Sport Live 3 HD SE', 'V Sport Live 4 HD SE', 
      'V Sport Live 5 HD SE', 'NBC Golf Pass FHD SE', 'Amazon Prime FHD SE', 'NETFLIX 01 (FHD@30fps) Events Only', 
      'NETFLIX 02 (FHD@60fps) USA Events Only', 'NETFLIX 03 (FHD@60fps) International Events Only', 'SVT1 Norrbotten SE', 
      'SVT1 Dalarna SE', 'SVT1 Gävleborg SE', 'SVT1 Jämtland SE', 'SVT1 Jönköping SE', 'SVT1 Örebro SE', 'SVT1 Öst SE', 
      'SVT1 Småland SE', 'SVT1 Värmland SE', 'SVT1 Väst SE', 'SVT1 Västerbotten SE', 'SVT1 Västernorrland SE', 
      'SE | Svenska Favoriter', 'SE | Sveriges Radio Din gata', 'SE | Sveriges Radio P1', 'SE | Sveriges Radio P2 Musik', 
      'SE | Sveriges Radio P3', 'SE | Sveriges Radio P4', 'SE | Sveriges Radio P6', 'SE | Bandit Ballads', 
      'SE | Bandit Classic Rock', 'SE | Bandit Metal', 'SE | Bandit Rock', 'SE | Country Classics', 'SE | Dansbandsfavoriter', 
      'SE | Dansbandskanalen', 'SE | Electro Lounge', 'SE | Feel Good Hits', 'SE | Gamla Favoriter', 'SE | Gold FM', 
      'SE | Guldkanalen', 'SE | Guldkanalen 60-Tal', 'SE | Guldkanalen 70-tal', 'SE | Guldkanalen 80-tal', 
      'SE | Guldkanalen 90-tal', 'SE | Hit Mix 90s', 'SE | Julkanalen 107.5', 'SE | Lugna Favoriter', 'SE | Mix Megapol', 
      'SE | Nostalgi', 'SE | NRJ', 'SE | One Hit Wonders', 'SE | Pirate Rock', 'SE | Power Club', 'SE | Power Hit Radio', 
      'SE | Power Millenium', 'SE | Power Street', 'SE | Radio Rainbow', 'SE | Radio Top 40', 'SE | Radio Treby', 
      'SE | Relax FM', 'SE | Retro FM', 'SE | RIX FM', 'SE | Rockklassiker Hårdrock', 'SE | Skärgårdsradion', 
      'SE | Soul Classics', 'SE | STAR fm', 'SE | STAR 70s', 'SE | STAR 80s', 'SE | STAR 90s'
    ]
  },
  { 
    id: 2, region: 'nordics', name: 'Norway Premium 🇳🇴', count: '125+', desc: 'NRK, TV2, V Sport, Max, Eurosport', iconType: 'tv',
    searchTerms: 'norway norge nordic nrk tv2 v sport max eurosport',
    featured: ['NRK 1 HD', 'TV 2 Direkte HD', 'TVNorge HD', 'TV 3 HD', 'V Sport 1 HD', 'Eurosport 1 HD NO'],
    fullList: [
      'NRK 2 HD', 'NRK 3 HD', 'NRK Super', 'NRK Tegnspråk', 'TV 2 Livsstil HD', 'TV 2 Nyheter HD', 'TV 2 Sport 1 HD', 'TV 2 Sport 2 HD', 
      'TV 2 Zebra HD', 'TV 2 Play Premiere', 'TV 3+ HD', 'TV 6 HD', 'MAX HD', 'VOX HD', 'FEM HD', 'Discovery Channel NO', 
      'Investigation Discovery NO', 'TLC Norway HD', 'National Geographic NO', 'Nat Geo Wild NO', 'Animal Planet NO', 'History Channel NO', 
      'Viasat Nature NO', 'Viasat Explore NO', 'Viasat History NO', 'BBC Nordic NO', 'Matkanalen', 'Fjernsynet', 'Disney Channel NO', 
      'Disney Junior NO', 'Nick Jr NO', 'Nickelodeon NO', 'Cartoon Network NO', 'Boomerang NO', 'V Sport Golf NO', 'V Sport Motor NO', 
      'V Sport Premier League NO', 'V Sport Fotball NO', 'V Sport Ultra HD NO', 'Eurosport 2 HD NO', 'Eurosport Norge', 'Rikstoto Direkte', 
      'Visjon Norge', 'Kanal 10 Norge', 'TV Haugaland', 'TV Nordvest', 'TV Sunnmøre', 'TV Nord', 'TV Agder', 'TV Vest', 'TV Øst', 
      'NRK Østlandssendingen', 'NRK Rogaland', 'NRK Hordaland', 'NRK Trøndelag', 'NRK Nordland', 'NRK Troms', 'NRK Finnmark', 
      'NRK Sørlandet', 'NRK Telemark', 'NRK Hedmark', 'NRK Oppland', 'Radio Norge', 'P4 Lyden av Norge', 'Radio Rock', 'Radio Vinyl', 
      'Topp 40', 'Kiss', 'Norsk Pop', 'Radio 1', 'P5 Hits', 'NRK P1', 'NRK P2', 'NRK P3', 'NRK mP3', 'NRK Klassisk', 'NRK Alltid Nyheter', 
      'NRK Super Radio', 'NRK P13', 'NRK Sport', 'NRK Folkemusikk', 'NRK Jazz', 'Norway Box Office Hits', 'Norway Indie Cinema', 
      'Norway Nordic Noir Classics', 'Norway Documentaries HD', 'Norway Live Event A', 'Norway Live Event B', 'Norway Live Event C', 
      'Norway Live Event D', 'Norway PPV Sports 1', 'Norway PPV Sports 2', 'Norway PPV Sports 3'
    ]
  },
  { 
    id: 3, region: 'nordics', name: 'Denmark Premium 🇩🇰', count: '115+', desc: 'DR1, TV2 DK, Viaplay, 6\'eren, Canal 9', iconType: 'tv',
    searchTerms: 'denmark danmark nordic dr1 tv2 viaplay 6eren canal 9',
    featured: ['DR1 HD', 'DR2 HD', 'TV 2 Denmark HD', 'TV 3+ HD', '6\'eren HD', 'Kanal 5 HD'],
    fullList: [
      'DR Ramasjang', 'DR Ultra', 'DR K HD', 'TV 2 News HD', 'TV 2 Sport HD', 'TV 2 Sport X HD', 'TV 2 Echo HD', 'TV 2 Charlie HD', 
      'TV 2 Fri HD', 'TV 3 HD', 'TV 3 Max HD', 'TV 3 Puls HD', 'TV 3 Sport HD', 'Kanal 4 HD', 'See HD', 'Canal 9 HD', 
      'Discovery Denmark HD', 'Investigation Discovery DK', 'TLC Denmark HD', 'National Geographic DK', 'Nat Geo Wild DK', 
      'Animal Planet DK', 'History Channel DK', 'Viasat Nature DK', 'Viasat Explore DK', 'Viasat History DK', 'BBC Nordic DK', 
      'Nickelodeon Denmark', 'Nick Jr DK', 'Disney Channel DK', 'Disney Junior DK', 'Cartoon Network DK', 'Boomerang DK', 
      'VH1 Denmark', 'MTV Denmark', 'DK4 HD', 'Eurosport 1 DK', 'Eurosport 2 DK', 'V Sport Golf DK', 'V Sport Ultra HD DK', 
      'Danish Movie Premiere HD', 'Danish Action Cinema', 'Danish Family Movies', 'Danish Stand Up Comedy', 'TV 2 Fyn', 'TV 2 Lorry', 
      'TV 2 Nord', 'TV 2 Øst', 'TV 2 Bornholm', 'TV Midtvest', 'TV Syd', 'TV 2 Østjylland', 'Radio 100', 'NOVA', 'The Voice', 
      'Pop FM', 'Radio Soft', 'myROCK', 'Classic FM', 'DR P1', 'DR P2', 'DR P3', 'DR P4', 'DR P5', 'DR P6 Beat', 'DR P8 Jazz', 
      'Denmark Live Sports PPV 1', 'Denmark Live Sports PPV 2', 'Denmark Live Sports PPV 3', 'Denmark Live Sports PPV 4', 
      'Denmark Live Sports PPV 5', 'Denmark Live Sports PPV 6', 'Denmark Live Sports PPV 7', 'Denmark Live Sports PPV 8'
    ]
  },
  { 
    id: 4, region: 'nordics', name: 'Finland Premium 🇫🇮', count: '105+', desc: 'Yle, MTV3, Nelonen, V Sport, Ruutu', iconType: 'tv',
    searchTerms: 'finland suomi nordic yle mtv3 nelonen v sport ruutu',
    featured: ['Yle TV1 HD', 'Yle TV2 HD', 'MTV3 HD', 'Nelonen HD', 'V Sport 1 Suomi', 'Sub HD'],
    fullList: [
      'Yle Teema & Fem HD', 'TV5 Finland', 'Kutonen HD', 'Jim HD', 'Liv HD', 'Hero HD', 'Frii HD', 'Ava HD', 'National Geographic FI', 
      'Discovery Channel FI', 'TLC Finland', 'Animal Planet FI', 'History Channel FI', 'Viasat History FI', 'Viasat Explore FI', 
      'Viasat Nature FI', 'MTV Max HD', 'MTV Fakta', 'MTV Leffa', 'MTV Juniori', 'C More First HD', 'C More Hits HD', 'C More Stars HD', 
      'C More Series HD', 'V Film Premiere FI', 'V Film Action FI', 'V Film Hits FI', 'V Film Family FI', 'Disney Channel FI', 
      'Disney Junior FI', 'Cartoon Network FI', 'Nickelodeon FI', 'Nick Jr FI', 'MTV Finland', 'Eurosport 1 FI', 'Eurosport 2 FI', 
      'V Sport Jääkiekko HD', 'V Sport Jalkapallo HD', 'V Sport Premium HD', 'V Sport Golf FI', 'V Sport Urheilu HD', 'V Sport Vinter FI', 
      'Ruutu+ Urheilu 1', 'Ruutu+ Urheilu 2', 'Ruutu+ Leffat ja Sarjat', 'Ruutu+ Lapset', 'AlfaTV HD', 'IskelmäTV', 'Fokus', 
      'Finland PPV Event 1', 'Finland PPV Event 2', 'Finland PPV Event 3', 'Finland PPV Event 4', 'Finland PPV Event 5', 'Radio Suomipop', 
      'Radio Nova', 'Radio Rock', 'NRJ Finland', 'Loop', 'HitMix', 'Radio Aalto', 'Radio City', 'Iskelmä', 'Yle Radio 1', 'YleX', 
      'Yle Radio Suomi', 'Yle Puhe', 'Yle X3M', 'Yle Vega'
    ]
  },

  // ════════════════════════════════════════════════════
  // 2. EUROPEAN HUB
  // ════════════════════════════════════════════════════
  { 
    id: 5, region: 'eu', name: 'UK & Ireland 🇬🇧 🇮🇪', count: '210+', desc: 'Sky Sports, TNT, BBC, ITV, Sky Cinema', iconType: 'monitor',
    searchTerms: 'uk united kingdom england ireland bbc itv sky sports tnt premier league epl',
    featured: ['BBC One HD', 'ITV 1 HD', 'Sky Sports Main Event', 'Sky Cinema Premiere', 'TNT Sports 1 HD', 'Channel 4 HD'],
    fullList: [
      'BBC Two HD', 'BBC Three HD', 'BBC Four HD', 'BBC News HD', 'BBC Scotland HD', 'BBC Alba HD', 'ITV 2 HD', 'ITV 3 HD', 
      'ITV 4 HD', 'ITVBe HD', 'Channel 5 HD', '5USA HD', '5STAR HD', '5Action HD', 'E4 HD', 'More4 HD', 'Film4 HD', 'Dave HD', 
      'Drama HD', 'W HD', 'Gold HD', 'Alibi HD', 'Sky Showcase HD', 'Sky Witness HD', 'Sky Atlantic HD', 'Sky Max HD', 'Sky Comedy HD', 
      'Sky Documentaries HD', 'Sky Nature HD', 'Sky Crime HD', 'Sky Arts HD', 'Sky Sci-Fi HD', 'Sky History HD', 'Sky Sports Premier League', 
      'Sky Sports Football', 'Sky Sports Cricket', 'Sky Sports Golf', 'Sky Sports F1', 'Sky Sports Tennis', 'Sky Sports Arena', 
      'Sky Sports Action', 'Sky Sports Mix', 'Sky Sports Racing', 'Sky Sports News HD', 'TNT Sports 2 HD', 'TNT Sports 3 HD', 
      'TNT Sports 4 HD', 'TNT Sports Ultimate 4K', 'Premier Sports 1 HD', 'Premier Sports 2 HD', 'Sky Cinema Select', 'Sky Cinema Action', 
      'Sky Cinema Animation', 'Sky Cinema Family', 'Sky Cinema Comedy', 'Sky Cinema Thriller', 'Sky Cinema Drama', 'Sky Cinema Sci-Fi', 
      'Sky Cinema Greats', 'True Movies', 'TCM Movies UK', 'Eurosport 1 UK', 'Eurosport 2 UK', 'MUTV HD', 'LFCTV HD', 'Chelsea TV HD', 
      'Racing TV HD', 'Discovery UK HD', 'Discovery Science UK', 'Discovery Turbo', 'Nat Geo UK HD', 'Nat Geo Wild UK', 'History UK HD', 
      'Comedy Central UK', 'Comedy Central Extra', 'MTV UK', 'MTV Music', 'MTV Hits', 'MTV Base', 'Club MTV', 'TLC UK', 'Food Network UK', 
      'HGTV UK', 'DMAX UK', 'Quest HD', 'Quest Red', 'Really', 'CBBC HD', 'CBeebies HD', 'Cartoon Network UK', 'Boomerang UK', 
      'Nickelodeon UK', 'Nicktoons UK', 'Nick Jr UK', 'Disney Channel UK', 'Al Jazeera English', 'CNN UK', 'Bloomberg UK', 'CNBC UK', 
      'RTÉ One HD', 'RTÉ2 HD', 'RTÉ News Now', 'Virgin Media One', 'Virgin Media Two', 'Virgin Media Three', 'TG4 HD', 'Sky Sports Red Button 1', 
      'Sky Sports Red Button 2', 'Sky Sports Red Button 3', 'Sky Sports Red Button 4', 'Sky Sports Red Button 5', 'Sky Sports Red Button 6', 
      'BBC Radio 1', 'BBC Radio 2', 'BBC Radio 3', 'BBC Radio 4', 'BBC Radio 5 Live', 'Capital FM', 'Heart FM', 'Smooth Radio', 'Classic FM', 
      'Kiss FM', 'Magic Radio', 'Absolute Radio'
    ]
  },
  { 
    id: 6, region: 'eu', name: 'Germany & Austria 🇩🇪 🇦🇹', count: '175+', desc: 'Sky DE, DAZN, ARD, ZDF, RTL, ProSieben', iconType: 'monitor',
    searchTerms: 'germany deutschland austria sky de dazn ard zdf rtl prosieben bundesliga',
    featured: ['ARD Das Erste HD', 'ZDF HD', 'RTL HD', 'ProSieben HD', 'Sky Sport Bundesliga HD', 'DAZN 1 DE'],
    fullList: [
      'Sky Sport Bundesliga 2 HD', 'Sky Sport Bundesliga 3 HD', 'Sky Sport Bundesliga 4 HD', 'Sky Sport Bundesliga 5 HD', 
      'Sky Sport Bundesliga 6 HD', 'Sky Sport Bundesliga 7 HD', 'Sky Sport Bundesliga 8 HD', 'Sky Sport Bundesliga 9 HD', 
      'Sky Sport Bundesliga 10 HD', 'Sky Sport 1 HD', 'Sky Sport 2 HD', 'Sky Sport 3 HD', 'Sky Sport 4 HD', 'Sky Sport 5 HD', 
      'Sky Sport 6 HD', 'Sky Sport 7 HD', 'Sky Sport 8 HD', 'Sky Sport 9 HD', 'Sky Sport 10 HD', 'Sky Sport Top Event HD', 
      'Sky Sport Mix HD', 'Sky Sport Tennis HD', 'Sky Sport Golf HD', 'Sky Cinema Premiere HD', 'Sky Cinema Action HD', 
      'Sky Cinema Family HD', 'Sky Cinema Best Of HD', 'Sky Cinema Special HD', 'Sky Cinema Classics', 'Sky Atlantic HD', 
      'Sky One HD', 'Sky Showcase HD', 'Sky Crime HD', 'Sky Documentaries HD', 'Sky Nature HD', 'Sat.1 HD', 'Sat.1 Gold HD', 
      'ProSieben Maxx HD', 'Vox HD', 'Vox Up HD', 'RTL II HD', 'Super RTL HD', 'RTL Nitro HD', 'RTL Crime HD', 'RTL Passion HD', 
      'Kabel Eins HD', 'Kabel Eins Doku HD', 'n-tv HD', 'Welt HD', 'Eurosport 1 DE', 'Eurosport 2 DE', 'Sport1 HD', 'Sport1+ HD', 
      'Sportdigital Fussball HD', 'DAZN 2 DE', 'Disney Channel DE', 'KiKA HD', 'Nick DE HD', 'Cartoon Network DE', 'Boomerang DE', 
      'Comedy Central DE', 'DMAX HD', 'Tele 5 HD', 'Sixx HD', 'Servus TV DE HD', 'Servus TV AT HD', 'ORF 1 HD', 'ORF 2 HD', 
      'ORF III HD', 'ATV HD', 'Puls 4 HD', 'One HD', 'ZDFneo HD', 'ZDFinfo HD', 'Tagesschau24 HD', 'Phoenix HD', 'Arte DE HD', 
      '3sat HD', 'Bayerischer Rundfunk HD', 'Hessischer Rundfunk HD', 'MDR Fernsehen HD', 'NDR Fernsehen HD', 'WDR Fernsehen HD', 
      'SWR Fernsehen HD', 'RBB Berlin HD', 'SR Fernsehen HD', 'Radio Bremen TV', 'Hamburg 1', 'TV Berlin', 'München TV', 'NRW.TV', 
      '13th Street HD', 'Syfy DE HD', 'Universal TV HD', 'Warner TV Comedy', 'Warner TV Serie', 'Warner TV Film', 'Kino Welt TV', 
      'Romance TV', 'Heimatkanal', 'Goldstar TV', 'Antenne Bayern', '1LIVE', 'WDR 2', 'SWR3', 'NDR 2', 'Bayern 3', 'Radio FFH', 
      'bigFM', 'KISS FM', 'Sunshine Live'
    ]
  },
  { 
    id: 7, region: 'eu', name: 'Spain Premium 🇪🇸', count: '155+', desc: 'Movistar+, DAZN, LaLiga, Antena 3, Telecinco', iconType: 'tv',
    searchTerms: 'spain espana movistar dazn laliga antena 3 telecinco',
    featured: ['Movistar+ LaLiga HD', 'DAZN LaLiga', 'Antena 3 HD', 'Telecinco HD', 'La 1 HD', 'laSexta HD'],
    fullList: [
      'Movistar Liga de Campeones 1 HD', 'Movistar Liga de Campeones 2 HD', 'Movistar Liga de Campeones 3 HD', 'Movistar Liga de Campeones 4 HD', 
      'Movistar Deportes 1 HD', 'Movistar Deportes 2 HD', 'Movistar Deportes 3 HD', 'Movistar Deportes 4 HD', 'Movistar Golf HD', 
      'Movistar Estrenos HD', 'Movistar Estrenos 2 HD', 'Movistar Series HD', 'Movistar Series 2 HD', 'Movistar Accion HD', 
      'Movistar Comedia HD', 'Movistar Drama HD', 'Movistar Clasicos HD', 'Movistar CineDoc&Roll', 'Movistar Fest', 'Vamos HD', 
      'La 2 HD', 'Cuatro HD', 'Real Madrid TV HD', 'Barça TV HD', 'Betis TV', 'Sevilla FC TV', 'FDF HD', 'Energy HD', 'Divinity HD', 
      'Boing HD', 'Clan HD', 'Teledeporte HD', 'Canal 24 Horas', 'Gol Play HD', 'DAZN 1 ES', 'DAZN 2 ES', 'DAZN 3 ES', 'DAZN 4 ES', 
      'DAZN F1 ES', 'Eurosport 1 ES', 'Eurosport 2 ES', 'Fox ES HD', 'Fox Life ES', 'AXN ES HD', 'AXN White ES', 'TNT ES HD', 
      'Calle 13 HD', 'Syfy ES HD', 'AMC ES HD', 'Comedy Central ES HD', 'Cosmo HD', 'Hollywood ES HD', 'TCM ES HD', 'Sundance TV ES', 
      'XTRM ES', 'Somos', 'Dark', 'National Geographic ES', 'Nat Geo Wild ES', 'Historia ES', 'Odisea HD', 'Discovery ES', 
      'Crime & Investigation ES', 'Blaze ES', 'Viajar HD', 'Canal Cocina', 'Canal Decasa', 'Disney Channel ES', 'Disney Junior ES', 
      'Nickelodeon ES', 'Nick Jr ES', 'Canal Sur Andalucia', 'TV3 Catalunya HD', '324 Catalunya', 'Esport3', 'ETB 1 HD', 'ETB 2 HD', 
      'TVG Galicia', 'Telemadrid HD', 'La 8', 'Aragon TV', 'CMMedia', 'IB3', 'TV Canaria', 'Los40 TV', 'Cadena Dial', 'Europa FM', 
      'Cadena SER', 'COPE', 'Onda Cero', 'Radio Nacional'
    ]
  },
  { 
    id: 8, region: 'eu', name: 'France Premium 🇫🇷', count: '165+', desc: 'Canal+, beIN Sports, RMC Sport, TF1, M6', iconType: 'tv',
    searchTerms: 'france francais canal+ bein sports rmc sport tf1 m6 ligue 1',
    featured: ['Canal+ HD', 'Canal+ Foot HD', 'beIN Sports 1 FR', 'RMC Sport 1 HD', 'TF1 HD', 'M6 HD'],
    fullList: [
      'Canal+ Sport HD', 'Canal+ Cinema HD', 'Canal+ Series HD', 'Canal+ Docs HD', 'Canal+ Kids HD', 'Canal+ Grand Ecran', 
      'Canal+ Sport 360', 'beIN Sports 2 FR', 'beIN Sports 3 FR', 'beIN Sports Max 4', 'beIN Sports Max 5', 'beIN Sports Max 6', 
      'beIN Sports Max 7', 'beIN Sports Max 8', 'beIN Sports Max 9', 'beIN Sports Max 10', 'RMC Sport 2 HD', 'RMC Sport 3 HD', 
      'RMC Sport 4 HD', 'RMC Découverte', 'RMC Story', 'France 2 HD', 'France 3 HD', 'France 4 HD', 'France 5 HD', 'Arte FR HD', 
      'C8 HD', 'W9 HD', 'TMC HD', 'TFX HD', 'NRJ 12 HD', 'LCP Public Sénat', 'France Info', 'BFM TV HD', 'CNews HD', 'LCI HD', 
      'L\'Equipe 21 HD', 'Eurosport 1 FR', 'Eurosport 2 FR', 'Automoto La Chaîne', 'Golf+ FR', 'Infosport+', 'Equidia Live', 
      'Paris Première', 'Téva', 'RTL9 HD', 'AB1 HD', 'TV Breizh', 'Polar+', 'Série Club', 'Ciné+ Premier', 'Ciné+ Frisson', 
      'Ciné+ Emotion', 'Ciné+ Famiz', 'Ciné+ Club', 'Ciné+ Classic', 'OCS Max', 'OCS City', 'OCS Choc', 'OCS Géants', 
      'Action FR', 'Paramount Channel FR', 'TCM Cinéma FR', 'Disney Channel FR', 'Disney Junior FR', 'Nickelodeon FR', 
      'Nickelodeon Teen FR', 'Nickelodeon Junior FR', 'Cartoon Network FR', 'Boing FR', 'Piwi+', 'Teletoon+', 'Tiji', 'Canal J', 
      'Gulli HD', 'National Geographic FR', 'Nat Geo Wild FR', 'Ushuaïa TV', 'Histoire TV', 'Toute l\'Histoire', 'Science & Vie TV', 
      'Animaux', 'Trek', 'Chasse et Pêche', 'MyZen TV', 'Melody TV', 'Mezzo FR', 'NRJ Hits', 'Trace Urban FR', 'France 3 Alpes', 
      'France 3 Alsace', 'France 3 Aquitaine', 'France 3 Auvergne', 'France 3 Bretagne', 'France 3 Bourgogne', 'France 3 Centre', 
      'France 3 Corse', 'France 3 Paris', 'France 3 Normandie', 'NRJ Radio', 'Skyrock', 'Fun Radio', 'RTL Radio', 'Europe 1', 
      'RMC Radio', 'France Inter'
    ]
  },
  { 
    id: 9, region: 'eu', name: 'Italy Premium 🇮🇹', count: '145+', desc: 'Sky Italia, DAZN, RAI, Mediaset, Eurosport', iconType: 'monitor',
    searchTerms: 'italy italia serie a sky it dazn rai mediaset',
    featured: ['Sky Sport Uno HD', 'DAZN 1 IT', 'RAI 1 HD', 'Canale 5 HD', 'Sky Cinema Uno HD', 'Italia 1 HD'],
    fullList: [
      'Sky Sport Calcio HD', 'Sky Sport Football HD', 'Sky Sport Arena HD', 'Sky Sport Tennis HD', 'Sky Sport Action HD', 
      'Sky Sport F1 HD', 'Sky Sport MotoGP HD', 'Sky Sport NBA HD', 'Sky Sport 251', 'Sky Sport 252', 'Sky Sport 253', 
      'Sky Sport 254', 'Sky Sport 255', 'Sky Sport 24 HD', 'DAZN 2 IT', 'DAZN 3 IT', 'DAZN 4 IT', 'DAZN 5 IT', 'DAZN 6 IT', 
      'Zona DAZN HD', 'RAI 2 HD', 'RAI 3 HD', 'RAI 4 HD', 'RAI 5 HD', 'RAI Movie HD', 'RAI Premium HD', 'RAI Storia HD', 
      'RAI Sport HD', 'RAI News 24 HD', 'RAI Yoyo', 'RAI Gulp', 'Rete 4 HD', 'La7 HD', 'La7d HD', 'TV8 HD', 'Nove HD', 
      '20 Mediaset HD', 'Iris HD', 'La5 HD', 'Cine34 HD', 'Top Crime HD', 'Mediaset Extra HD', 'Focus HD', 'Sky Cinema Due HD', 
      'Sky Cinema Collection HD', 'Sky Cinema Family HD', 'Sky Cinema Action HD', 'Sky Cinema Suspense HD', 'Sky Cinema Romance HD', 
      'Sky Cinema Drama HD', 'Sky Cinema Comedy HD', 'Sky Uno HD', 'Sky Atlantic HD', 'Sky Serie HD', 'Sky Investigation HD', 
      'Sky Documentaries HD', 'Sky Nature HD', 'Sky Arte HD', 'Fox IT HD', 'Fox Crime IT HD', 'Comedy Central IT HD', 
      'Premium Action HD', 'Premium Crime HD', 'Premium Stories HD', 'Premium Cinema 1 HD', 'Premium Cinema 2 HD', 
      'Premium Cinema 3 HD', 'Eurosport 1 IT', 'Eurosport 2 IT', 'SuperTennis HD', 'Sportitalia HD', 'Milan TV', 'Inter TV', 
      'Juventus TV', 'Roma TV', 'Torino Channel', 'Discovery Channel IT', 'Discovery Science IT', 'National Geographic IT', 
      'Nat Geo Wild IT', 'History Channel IT', 'Crime & Investigation IT', 'Gambero Rosso Channel', 'Real Time IT', 'DMAX IT', 
      'MotorTrend IT', 'Disney Channel IT', 'Disney Junior IT', 'Cartoon Network IT', 'Boomerang IT', 'Nickelodeon IT', 'Nick Jr IT', 
      'Super!', 'K2', 'Frisbee', 'RTL 102.5 TV', 'Radio Italia TV', 'Radio Deejay', 'Radio 105', 'RDS'
    ]
  },
  { 
    id: 10, region: 'eu', name: 'Netherlands & Belgium 🇳🇱 🇧🇪', count: '135+', desc: 'Ziggo Sport, ESPN NL, NPO, VTM, Play', iconType: 'tv',
    searchTerms: 'netherlands belgium holland dutch ziggo espn nl npo vtm play',
    featured: ['Ziggo Sport Select HD', 'ESPN 1 NL HD', 'NPO 1 HD', 'VTM HD', 'Play 4 HD', 'Één HD'],
    fullList: [
      'Ziggo Sport Voetbal', 'Ziggo Sport Golf', 'Ziggo Sport Racing', 'Ziggo Sport Tennis', 'Ziggo Sport Docu', 'ESPN 2 NL HD', 
      'ESPN 3 NL HD', 'ESPN 4 NL HD', 'Viaplay Xtra NL', 'NPO 2 HD', 'NPO 3 HD', 'NPO 1 Extra', 'NPO 2 Extra', 'NPO Politiek', 
      'RTL 4 HD', 'RTL 5 HD', 'RTL 7 HD', 'RTL 8 HD', 'RTL Z', 'SBS 6 HD', 'Net5 HD', 'Veronica HD', 'SBS 9 HD', 'Canvas HD', 
      'Ketnet', 'VTM 2 HD', 'VTM 3 HD', 'VTM 4 HD', 'VTM Gold', 'Play 5 HD', 'Play 6 HD', 'Play 7 HD', 'Kanaal Z', 'La Une HD', 
      'Tipik HD', 'La Trois HD', 'RTL TVI HD', 'Club RTL HD', 'Plug RTL HD', 'Eurosport 1 NL', 'Eurosport 2 NL', 'Eleven Sports 1 BE', 
      'Eleven Sports 2 BE', 'Eleven Sports 3 BE', 'Play Sports 1', 'Play Sports 2', 'Play Sports 3', 'Play Sports Golf', 
      'Film1 Premiere', 'Film1 Action', 'Film1 Family', 'Film1 Drama', 'Play More Cinema', 'Play More Kicks', 'Play More Relax', 
      'Comedy Central NL', 'MTV NL', 'TLC NL', 'Discovery NL HD', 'Investigation Discovery NL', 'National Geographic NL', 
      'Nat Geo Wild NL', 'History NL', 'Crime & Investigation NL', '24Kitchen', 'XITE NL', 'Disney Channel NL', 'Disney XD NL', 
      'Nickelodeon NL', 'Nick Toons NL', 'Nick Jr NL', 'Cartoon Network NL', 'Boomerang NL', 'Studio 100 TV', 'VRT NWS', 
      'L1 TV', 'Omroep Brabant', 'TV Gelderland', 'RTV Rijnmond', 'AT5', 'Radio 538', 'Qmusic NL', 'Sky Radio', 'NPO Radio 1', 
      'NPO Radio 2', 'NPO 3FM', 'Radio 10', '100% NL', 'Studio Brussel', 'MNM', 'Radio 2 BE', 'Qmusic BE', 'Joe FM'
    ]
  },
  { 
    id: 11, region: 'eu', name: 'Poland Premium 🇵🇱', count: '130+', desc: 'Canal+, Polsat, TVP, Eleven Sports, TVN', iconType: 'tv',
    searchTerms: 'poland polska canal+ polsat tvp eleven sports tvn',
    featured: ['Canal+ Premium HD', 'Polsat Sport 1 HD', 'TVP 1 HD', 'TVN HD', 'Eleven Sports 1 PL', 'Eurosport 1 PL'],
    fullList: [
      'Canal+ Sport HD', 'Canal+ Sport 2 HD', 'Canal+ Sport 3 HD', 'Canal+ Sport 4 HD', 'Canal+ Sport 5 HD', 'Canal+ Film HD', 
      'Canal+ Seriale HD', 'Canal+ Family HD', 'Canal+ Dokument HD', 'Canal+ Now', 'Polsat Sport 2 HD', 'Polsat Sport 3 HD', 
      'Polsat Sport Extra HD', 'Polsat Sport News HD', 'Polsat Sport Fight HD', 'Polsat HD', 'Polsat 2 HD', 'Polsat News HD', 
      'Polsat Film HD', 'Polsat Seriale HD', 'Polsat Play HD', 'Polsat Cafe HD', 'TVP 2 HD', 'TVP Info HD', 'TVP Sport HD', 
      'TVP Seriale', 'TVP Kultura HD', 'TVP Historia', 'TVP Rozrywka', 'TVP Dokument', 'TVP Kobieta', 'TVN 7 HD', 'TVN 24 HD', 
      'TVN 24 BiS', 'TVN Turbo HD', 'TVN Style HD', 'TVN Fabuła HD', 'TTV HD', 'Eleven Sports 2 PL', 'Eleven Sports 3 PL', 
      'Eleven Sports 4 PL', 'Eurosport 2 PL', 'SportKlub PL', 'Extreme Sports PL', 'HBO HD PL', 'HBO 2 HD PL', 'HBO 3 HD PL', 
      'Cinemax HD PL', 'Cinemax 2 HD PL', 'Ale Kino+ HD', 'Kino Polska HD', 'Kino TV', 'Stopklatka HD', 'Fox PL HD', 
      'Fox Comedy PL', 'AXN PL HD', 'AXN Black', 'AXN White', 'AXN Spin', 'Comedy Central PL', 'Paramount Network PL', 
      'AMC PL', 'Sundance TV PL', 'SciFi PL', '13 Ulica', 'Universal Channel PL', 'Discovery Channel PL', 'Discovery Science PL', 
      'Discovery Historia', 'TLC PL', 'National Geographic PL', 'Nat Geo Wild PL', 'History PL', 'Planete+ HD', 'Fokus TV', 
      'Disney Channel PL', 'Disney Junior PL', 'Disney XD PL', 'Nickelodeon PL', 'Nick Jr PL', 'Cartoon Network PL', 'MiniMini+ HD', 
      'Teletoon+ HD', 'Da Vinci PL', 'Eska TV', 'Polo TV', '4Fun TV', 'Kino Polska Muzyka', 'Radio RMF FM', 'Radio ZET', 
      'Radio Eska', 'Polskie Radio Program I', 'Polskie Radio Program III'
    ]
  },
  { 
    id: 12, region: 'eu', name: 'Portugal Premium 🇵🇹', count: '115+', desc: 'Sport TV, DAZN Eleven, SIC, TVI, RTP', iconType: 'tv',
    searchTerms: 'portugal pt sport tv dazn eleven sic tvi rtp',
    featured: ['Sport TV 1 HD', 'DAZN Eleven 1 PT', 'SIC HD', 'TVI HD', 'RTP 1 HD', 'BTV HD (Benfica TV)'],
    fullList: [
      'Sport TV 2 HD', 'Sport TV 3 HD', 'Sport TV 4 HD', 'Sport TV 5 HD', 'Sport TV 6 HD', 'Sport TV+ HD', 'Sport TV NBA', 
      'DAZN Eleven 2 PT', 'DAZN Eleven 3 PT', 'DAZN Eleven 4 PT', 'DAZN Eleven 5 PT', 'DAZN Eleven 6 PT', 'Sporting TV', 
      'Porto Canal', 'Eurosport 1 PT', 'Eurosport 2 PT', 'RTP 2 HD', 'RTP 3 HD', 'RTP Memória', 'RTP Madeira', 'RTP Açores', 
      'RTP África', 'RTP Internacional', 'SIC Notícias HD', 'SIC Radical', 'SIC Mulher', 'SIC Caras', 'SIC K', 'TVI 24', 
      'TVI Ficção', 'TVI Reality', 'TVI Internacional', 'CMTV HD', 'Canal 11 HD', 'TVSéries HD', 'TVCine Top HD', 
      'TVCine Edition HD', 'TVCine Emotion HD', 'TVCine Action HD', 'Hollywood HD PT', 'Fox HD PT', 'Fox Life HD PT', 
      'Fox Crime HD PT', 'Fox Comedy HD PT', 'Fox Movies HD PT', 'AXN HD PT', 'AXN White HD PT', 'AXN Movies HD PT', 
      'AMC HD PT', 'Syfy HD PT', 'Globo PT', 'Record TV PT', 'Discovery Channel PT', 'Odisseia HD', 'National Geographic PT', 
      'Nat Geo Wild PT', 'History PT', 'Crime & Investigation PT', 'TLC PT', 'Canal de História', 'Casa e Cozinha', '24Kitchen PT', 
      'Disney Channel PT', 'Disney Junior PT', 'Nickelodeon PT', 'Nick Jr PT', 'Cartoon Network PT', 'Boomerang PT', 'Panda HD', 
      'Panda Kids', 'Biggs', 'JimJam PT', 'Baby TV PT', 'MTV PT', 'Trace Urban PT', 'Afro Music Channel', 'Mezzo PT', 
      'Radio Comercial', 'RFM', 'Antena 1', 'Antena 2', 'Antena 3', 'TSF Rádio Notícias', 'Rádio Renascença', 'Mega Hits', 
      'Cidade FM', 'M80 Rádio', 'Smooth FM'
    ]
  },
  { 
    id: 13, region: 'eu', name: 'Balkans & Adriatic 🇭🇷 🇷🇸 🇧🇦', count: '135+', desc: 'Arena Sport, Sport Klub, Pink, RTS, HRT', iconType: 'globe',
    searchTerms: 'balkans adriatic croatia serbia bosnia hrt rts pink arena sport sport klub',
    featured: ['Arena Sport 1 Premium', 'Sport Klub 1 HD', 'HRT 1 HD', 'RTS 1 HD', 'Pink TV', 'Nova TV HR'],
    fullList: [
      'Arena Sport 2 Premium', 'Arena Sport 3 Premium', 'Arena Sport 1 HD', 'Arena Sport 2 HD', 'Arena Sport 3 HD', 'Arena Sport 4 HD', 
      'Arena Sport 5 HD', 'Arena Sport 6 HD', 'Arena Sport 7 HD', 'Arena Sport 8 HD', 'Arena Sport 9 HD', 'Arena Sport 10 HD', 
      'Arena Fight', 'Arena Esport', 'Sport Klub 2 HD', 'Sport Klub 3 HD', 'Sport Klub 4 HD', 'Sport Klub 5 HD', 'Sport Klub 6 HD', 
      'Sport Klub 7 HD', 'Sport Klub 8 HD', 'Sport Klub 9 HD', 'Sport Klub 10 HD', 'Sport Klub Golf', 'Eurosport 1 Balkan', 
      'Eurosport 2 Balkan', 'HRT 2 HD', 'HRT 3 HD', 'HRT 4 HD', 'RTL HR HD', 'RTL 2 HR', 'RTL Kockica', 'Doma TV HR', 'SPTV HR', 
      'RTS 2 HD', 'RTS 3', 'RTS Drama', 'Prva TV RS', 'B92', 'Happy TV', 'Nova S', 'N1 Serbia', 'N1 Croatia', 'N1 Bosnia', 
      'Pink Plus', 'Pink Extra', 'Pink Film', 'Pink Action', 'Pink Thriller', 'Pink Crime & Mystery', 'Pink Romance', 'Pink Sci-Fi', 
      'Pink Reality', 'Pink Kids', 'Pink Music', 'BHT 1', 'FTV', 'RTRS', 'O Kanal', 'Hayat TV', 'Hayat Plus', 'Hayat Folk', 
      'BN TV', 'BN Music', 'Al Jazeera Balkans', 'RTCG 1', 'RTCG 2', 'Nova M', 'TV Vijesti', 'TV Slovenija 1', 'TV Slovenija 2', 
      'POP TV SI', 'Kanal A SI', 'Planet TV SI', 'Cinestar TV Premiere 1', 'Cinestar TV Premiere 2', 'Cinestar TV Action', 
      'Cinestar TV Fantasy', 'Cinestar TV Comedy', 'HBO Balkan HD', 'HBO 2 Balkan', 'HBO 3 Balkan', 'Cinemax Balkan', 
      'Cinemax 2 Balkan', 'Fox Balkan', 'Fox Life Balkan', 'Fox Crime Balkan', 'Fox Movies Balkan', 'AMC Balkan', 'AXN Adria', 
      'Discovery Balkan', 'National Geographic Balkan', 'Nat Geo Wild Balkan', 'History Balkan', 'Viasat Explore Adria', 
      'Viasat History Adria', 'Viasat Nature Adria', 'Disney Channel Balkan', 'Nickelodeon Balkan', 'Cartoon Network Balkan', 
      'Minimax Balkan', 'Radio Beograd 1', 'Radio HRT 1', 'Radio Sarajevo'
    ]
  },
  { 
    id: 14, region: 'eu', name: 'Turkey Premium 🇹🇷', count: '125+', desc: 'beIN Sports TR, S Sport, TRT, Kanal D, Star TV', iconType: 'monitor',
    searchTerms: 'turkey turkiye bein sports tr s sport trt kanal d star tv atv',
    featured: ['beIN Sports 1 TR HD', 'S Sport 1 HD', 'TRT 1 HD', 'Kanal D HD', 'Star TV HD', 'ATV HD'],
    fullList: [
      'beIN Sports 2 TR HD', 'beIN Sports 3 TR HD', 'beIN Sports 4 TR HD', 'beIN Sports 5 TR HD', 'beIN Sports Max 1 TR', 
      'beIN Sports Max 2 TR', 'beIN Sports Haber', 'S Sport 2 HD', 'Tivibu Spor 1 HD', 'Tivibu Spor 2 HD', 'Tivibu Spor 3 HD', 
      'Tivibu Spor 4 HD', 'TRT Spor HD', 'TRT Spor Yildiz', 'A Spor HD', 'Spor Smart HD', 'Spor Smart 2 HD', 'Eurosport 1 TR', 
      'Eurosport 2 TR', 'FB TV (Fenerbahçe)', 'GS TV (Galatasaray)', 'BJK TV (Beşiktaş)', 'Show TV HD', 'Fox TV TR HD', 
      'TV8 HD', 'TV8.5 HD', 'Kanal 7 HD', 'Beyaz TV HD', 'Teve2 HD', 'TLC TR HD', 'DMAX TR HD', 'TRT Haber HD', 'NTV TR HD', 
      'CNN Türk HD', 'Habertürk TV HD', 'A Haber HD', '24 TV HD', 'TRT 2 HD', 'TRT Belgesel HD', 'TRT Çocuk HD', 'TRT Müzik HD', 
      'TRT Kurdi', 'TRT Arabi', 'TRT Avaz', 'beIN Movies Premiere TR', 'beIN Movies Stars TR', 'beIN Movies Action TR', 
      'beIN Movies Family TR', 'beIN Movies Turk TR', 'beIN Series Sci-Fi TR', 'beIN Series Comedy TR', 'beIN Series Vice TR', 
      'beIN Series Drama TR', 'Sinema TV HD', 'Sinema TV Aksiyon HD', 'Sinema TV Aile HD', 'Sinema TV 1001 HD', 'Sinema TV Yerli HD', 
      'Fox Crime TR', 'Fox Life TR', 'FX TR', 'National Geographic TR', 'Nat Geo Wild TR', 'Discovery Channel TR', 
      'Discovery Science TR', 'Investigation Discovery TR', 'Animal Planet TR', 'History TR', 'Disney Channel TR', 'Disney Junior TR', 
      'Cartoon Network TR', 'Nickelodeon TR', 'Nick Jr TR', 'Minika Çocuk', 'Minika Go', 'Kral TV', 'Kral Pop TV', 'Power TV', 
      'Number One TV', 'Dream TV', 'TRT Radyo 1', 'Kral FM', 'PowerTürk FM', 'Süper FM', 'Metro FM', 'Virgin Radio TR', 'Alem FM'
    ]
  },

  // ════════════════════════════════════════════════════
  // 3. AMERICAS HUB
  // ════════════════════════════════════════════════════
  { 
    id: 15, region: 'us', name: 'USA Sports 🇺🇸', count: '165+', desc: 'NBA, NFL, NHL, MLB, ESPN, Fox Sports', iconType: 'monitor',
    searchTerms: 'usa sports united states espn fox sports nba nfl nhl mlb',
    featured: ['ESPN HD', 'ESPN 2 HD', 'FS1 HD', 'NBA TV HD', 'NFL Network HD', 'MLB Network HD'],
    fullList: [
      'FS2 HD', 'ESPNews HD', 'ESPN U HD', 'ESPN Deportes HD', 'SEC Network HD', 'ACC Network HD', 'Big Ten Network HD', 
      'Longhorn Network HD', 'CBS Sports Network HD', 'NHL Network HD', 'Golf Channel HD', 'Tennis Channel HD', 'PAC-12 Network HD', 
      'PAC-12 Bay Area', 'PAC-12 Los Angeles', 'PAC-12 Mountain', 'PAC-12 Oregon', 'PAC-12 Washington', 'Bally Sports Arizona', 
      'Bally Sports Detroit', 'Bally Sports Florida', 'Bally Sports Midwest', 'Bally Sports North', 'Bally Sports Ohio', 
      'Bally Sports South', 'Bally Sports Southeast', 'Bally Sports Southwest', 'Bally Sports West', 'Bally Sports Sun', 
      'NBC Sports Bay Area', 'NBC Sports Boston', 'NBC Sports California', 'NBC Sports Chicago', 'NBC Sports Philadelphia', 
      'NBC Sports Washington', 'YES Network HD', 'NESN HD', 'Marquee Sports Network', 'Spectrum SportsNet LA', 'Altitude Sports HD', 
      'MSG Network HD', 'MSG Plus HD', 'SNY HD', 'Root Sports Northwest', 'AT&T SportsNet Pittsburgh', 'AT&T SportsNet Rocky Mountain', 
      'AT&T SportsNet Southwest', 'NFL RedZone HD', 'Willow Cricket US', 'TUDN USA', 'Fox Deportes', 'GolTV USA', 'Fight Network USA', 
      'MavTV HD', 'Outdoor Channel HD', 'Sportsman Channel HD', 'TVG Network', 'TVG2', 'MotorTrend HD', 'World Fishing Network', 
      'USA Sports Event 1', 'USA Sports Event 2', 'USA Sports Event 3', 'USA Sports Event 4', 'USA Sports Event 5', 'USA Sports Event 6', 
      'USA Sports Event 7', 'USA Sports Event 8', 'USA Sports Event 9', 'USA Sports Event 10', 'NBA League Pass 1', 'NBA League Pass 2', 
      'NBA League Pass 3', 'NBA League Pass 4', 'NBA League Pass 5', 'NBA League Pass 6', 'NBA League Pass 7', 'NBA League Pass 8', 
      'MLB Extra Innings 1', 'MLB Extra Innings 2', 'MLB Extra Innings 3', 'MLB Extra Innings 4', 'MLB Extra Innings 5', 
      'NHL Center Ice 1', 'NHL Center Ice 2', 'NHL Center Ice 3', 'NHL Center Ice 4', 'NHL Center Ice 5'
    ]
  },
  { 
    id: 16, region: 'us', name: 'USA Entertainment & News 🇺🇸', count: '195+', desc: 'HBO, Showtime, AMC, CNN, Fox News, CBS', iconType: 'film',
    searchTerms: 'usa united states entertainment movies news hbo showtime amc cnn fox news abc nbc cbs',
    featured: ['HBO East HD', 'AMC HD', 'FX HD', 'TNT HD', 'CNN HD', 'Fox News HD'],
    fullList: [
      'HBO West HD', 'HBO 2 HD', 'HBO Signature HD', 'HBO Family HD', 'HBO Comedy HD', 'HBO Zone HD', 'HBO Latino HD', 
      'Showtime East HD', 'Showtime West HD', 'Showtime Showcase HD', 'Showtime Extreme HD', 'Showtime Family HD', 'Showtime Next HD', 
      'Showtime Women HD', 'The Movie Channel HD', 'The Movie Channel Xtra HD', 'Starz East HD', 'Starz West HD', 'Starz Edge HD', 
      'Starz Cinema HD', 'Starz Kids & Family HD', 'Starz Comedy HD', 'Starz InBlack HD', 'Encore HD', 'Encore Action HD', 
      'Encore Classic HD', 'Encore Suspense HD', 'Encore Westerns HD', 'Encore Black HD', 'Encore Family HD', 'Cinemax East HD', 
      'Cinemax West HD', 'ActionMax HD', 'ThrillerMax HD', 'MoreMax HD', 'MovieMax HD', 'OuterMax HD', '5StarMax HD', 'Epix HD', 
      'Epix 2 HD', 'Epix Hits HD', 'Epix Drive-In HD', 'USA Network HD', 'TBS HD', 'Paramount Network HD', 'Syfy HD', 'TruTV HD', 
      'Bravo HD', 'E! Entertainment HD', 'Comedy Central HD', 'MTV HD', 'VH1 HD', 'BET HD', 'CMT HD', 'A&E HD', 'History Channel HD', 
      'Vice HD', 'Lifetime HD', 'LMN HD', 'TLC HD', 'HGTV HD', 'Food Network HD', 'Travel Channel HD', 'Discovery Channel HD', 
      'Investigation Discovery HD', 'Animal Planet HD', 'OWN HD', 'Science HD', 'Destination America HD', 'American Heroes Channel HD', 
      'National Geographic HD', 'Nat Geo Wild HD', 'FX Movie Channel HD', 'FXX HD', 'Freeform HD', 'Disney Channel HD', 'Disney XD HD', 
      'Disney Junior HD', 'Nickelodeon HD', 'Nick Jr HD', 'Cartoon Network HD', 'Boomerang HD', 'Hallmark Channel HD', 
      'Hallmark Movies HD', 'GSN HD', 'TV Land HD', 'IFC HD', 'Sundance TV HD', 'We TV HD', 'BBC America HD', 'MSNBC HD', 
      'CNBC HD', 'HLN HD', 'Bloomberg TV US', 'C-SPAN', 'C-SPAN 2', 'C-SPAN 3', 'Weather Channel HD', 'AccuWeather HD', 
      'Newsmax TV HD', 'OAN HD', 'ABC East HD', 'NBC East HD', 'CBS East HD', 'Fox East HD', 'The CW East HD', 'PBS HD', 
      'ABC West HD', 'NBC West HD', 'CBS West HD', 'Fox West HD', 'USA Box Office 1-20', 'USA Local News Network (NYC, LA, CHI, MIA, DAL)'
    ]
  },
  { 
    id: 17, region: 'us', name: 'USA Latino & Mexico 🇲🇽', count: '135+', desc: 'Univision, Telemundo, Televisa, TUDN, Fox Sports MX', iconType: 'globe',
    searchTerms: 'usa latino mexico spanish espanol univision telemundo televisa tudn',
    featured: ['Univision HD', 'Telemundo HD', 'Las Estrellas HD', 'TUDN Mexico', 'Fox Sports MX', 'Azteca 7 HD'],
    fullList: [
      'UniMás HD', 'Galavisión HD', 'TUDN USA HD', 'Fox Deportes USA', 'ESPN Deportes USA', 'CNN en Español', 'Discovery en Español', 
      'Discovery Familia', 'Nat Geo Mundo', 'History en Español', 'Cine Latino', 'Cine Mexicano', 'De Película HD', 'De Película Clásico', 
      'Golden HD', 'Golden Edge', 'Golden Premier', 'TLNovelas', 'Bandamax', 'Telehit', 'Telehit Música', 'Canal 5 HD MX', 
      'Azteca Uno HD', 'Foro TV', 'ADN 40', 'Imagen Televisión HD', 'Multimedios TV', 'Milenio Televisión', 'Canal Once', 'Canal 22', 
      'Fox Sports 2 MX', 'Fox Sports 3 MX', 'Fox Sports Premium MX', 'ESPN Mexico HD', 'ESPN 2 Mexico HD', 'ESPN 3 Mexico HD', 
      'Claro Sports MX', 'Afizzionados HD', 'Sky Sports MX 1', 'Sky Sports MX 2', 'Sky Sports MX 3', 'Space MX', 'TNT MX', 
      'Warner Channel MX', 'Sony Channel MX', 'AXN MX', 'A&E MX', 'History MX', 'E! MX', 'Comedy Central MX', 'MTV MX', 
      'Disney Channel MX', 'Cartoon Network MX', 'Nickelodeon MX', 'Discovery Kids MX', 'Las Estrellas Delay 2H', 
      'Telemundo Internacional', 'Azteca Internacional', 'Hola TV', 'Gourmet', 'El Rey Network', 'Estrella TV', 'Mega TV USA', 
      'América Tevé', 'WAPA America', 'Centroamerica TV', 'Tele El Salvador', 'TV Venezuela', 'Caracol Internacional', 
      'Nuestra Tele Internacional', 'NTN24', 'Ecuavisa Internacional', 'Peru Magico', 'Sur Peru', 'TV Chile', 'Radio Formula', 
      'Los 40 Mexico', 'Exa FM', 'Ke Buena'
    ]
  },
  { 
    id: 18, region: 'us', name: 'Canada Premium 🇨🇦', count: '115+', desc: 'CBC, CTV, Global, TSN, Sportsnet, RDS', iconType: 'tv',
    searchTerms: 'canada canadian cbc ctv global tsn sportsnet rds tva',
    featured: ['CBC HD', 'CTV HD', 'Global HD', 'TSN 1 HD', 'Sportsnet Ontario', 'RDS HD'],
    fullList: [
      'CBC News Network HD', 'CTV News Channel HD', 'CP24 HD', 'TSN 2 HD', 'TSN 3 HD', 'TSN 4 HD', 'TSN 5 HD', 'Sportsnet East HD', 
      'Sportsnet West HD', 'Sportsnet Pacific HD', 'Sportsnet One HD', 'Sportsnet 360 HD', 'Sportsnet World HD', 'TVA Sports HD', 
      'TVA Sports 2 HD', 'RDS 2 HD', 'RDS Info', 'Citytv Toronto HD', 'Citytv Vancouver HD', 'Citytv Calgary HD', 'Citytv Montreal HD', 
      'CHCH HD', 'Yes TV HD', 'Chek TV', 'NTV HD', 'BNN Bloomberg HD', 'The Weather Network HD', 'Crave 1 HD', 'Crave 2 HD', 
      'Crave 3 HD', 'Crave 4 HD', 'HBO Canada 1 HD', 'HBO Canada 2 HD', 'Starz Canada 1 HD', 'Starz Canada 2 HD', 'Super Channel Fuse', 
      'Super Channel Heart & Home', 'Super Channel Vault', 'Ginx eSports TV Canada', 'Family Channel HD', 'Family CHRGD', 'Family Jr', 
      'YTV HD', 'Treehouse TV', 'Teletoon HD', 'Disney Channel CA', 'Disney Junior CA', 'Disney XD CA', 'Cartoon Network CA', 
      'Showcase HD', 'W Network HD', 'Slice HD', 'HGTV Canada HD', 'Food Network Canada HD', 'History Canada HD', 
      'National Geographic CA', 'Nat Geo Wild CA', 'Discovery CA HD', 'Animal Planet CA', 'Investigation Discovery CA', 'Discovery Science CA', 
      'Space (CTV Sci-Fi)', 'Bravo (CTV Drama)', 'Comedy (CTV Comedy)', 'MuchMusic HD', 'MTV Canada HD', 'CMT Canada', 
      'ICI Radio-Canada Télé', 'ICI RDI', 'ICI ARTV', 'TVA HD', 'Noovo HD', 'LCN HD', 'Canal D', 'Canal Vie', 'Z', 'VRAK', 'Séries+', 
      'Historia CA', 'AddikTV', 'Prise 2', 'Max', 'MétéoMédia', 'CFAI FM', 'CBC Radio One', 'CBC Music', 'Ici Radio-Canada Première'
    ]
  },
  { 
    id: 19, region: 'us', name: 'South America & Brazil 🇧🇷 🇦🇷', count: '145+', desc: 'Globo, Premiere, SporTV, ESPN, TNT Sports', iconType: 'globe',
    searchTerms: 'south america brazil argentina colombia chile globo premiere sportv espn tnt sports',
    featured: ['Globo HD', 'Premiere Clubes HD', 'SporTV 1 HD', 'ESPN Brasil HD', 'Telefe HD (AR)', 'TNT Sports AR'],
    fullList: [
      'Record TV HD', 'SBT HD', 'Band HD', 'RedeTV! HD', 'TV Cultura', 'Premiere 2 HD', 'Premiere 3 HD', 'Premiere 4 HD', 'Premiere 5 HD', 
      'Premiere 6 HD', 'Premiere 7 HD', 'Premiere 8 HD', 'Premiere 9 HD', 'Premiere 10 HD', 'SporTV 2 HD', 'SporTV 3 HD', 
      'ESPN 2 Brasil HD', 'ESPN 3 Brasil HD', 'ESPN 4 Brasil HD', 'BandSports HD', 'TNT Sports Brasil', 'Combate HD', 
      'Telecine Premium HD', 'Telecine Action HD', 'Telecine Touch HD', 'Telecine Pipoca HD', 'Telecine Cult HD', 'Telecine Fun HD', 
      'HBO Brasil HD', 'Megapix HD', 'Canal Brasil', 'GloboNews HD', 'BandNews HD', 'CNN Brasil HD', 'Multishow HD', 'GNT HD', 
      'Viva HD', 'Canal OFF HD', 'Bis HD', 'Mais Globosat', 'Gloob HD', 'Gloobinho', 'El Trece HD (AR)', 'America TV (AR)', 
      'Canal 9 (AR)', 'TV Publica (AR)', 'TyC Sports HD', 'ESPN Argentina HD', 'ESPN 2 Argentina HD', 'ESPN 3 Argentina HD', 
      'Fox Sports Argentina HD', 'Fox Sports 2 Argentina HD', 'Fox Sports 3 Argentina HD', 'TNT Sports Argentina', 'C5N', 'TN Todo Noticias', 
      'A24', 'Canal 26', 'Crónica TV', 'Caracol TV HD (CO)', 'RCN TV HD (CO)', 'Win Sports HD (CO)', 'Win Sports+ HD (CO)', 
      'Canal 1 (CO)', 'Senal Colombia', 'NTN24', 'Mega HD (CL)', 'Chilevisión HD (CL)', 'Canal 13 HD (CL)', 'TVN HD (CL)', 
      'TNT Sports HD (CL)', 'TNT Sports 2 (CL)', 'TNT Sports 3 (CL)', 'ESPN Chile HD', 'CDF Premium', 'VTV Uruguay', 'VTV Plus (UY)', 
      'Canal 4 (UY)', 'Canal 10 (UY)', 'Teledoce (UY)', 'Telefuturo (PY)', 'SNT (PY)', 'Bolivia TV', 'Unitel (BO)', 'Ecuavisa (EC)', 
      'Teleamazonas (EC)', 'GolTV Latin America', 'DirecTV Sports 1', 'DirecTV Sports 2', 'DirecTV Sports 3', 'Fox Premium Movies LA', 
      'Fox Premium Series LA', 'HBO LA HD', 'Cinecanal LA', 'Space LA', 'TNT LA'
    ]
  },

  // ════════════════════════════════════════════════════
  // 4. MENA & ASIA HUB
  // ════════════════════════════════════════════════════
  { 
    id: 20, region: 'mena', name: 'Arabic Premium 🇶🇦 🇦🇪', count: '185+', desc: 'beIN Sports, OSN, MBC, Rotana', iconType: 'monitor',
    searchTerms: 'arabic mena qatar uae bein sports osn mbc rotana',
    featured: ['beIN Sports 1 Premium', 'beIN Sports 4K', 'OSN Movies First', 'MBC 1 HD', 'Rotana Cinema HD'],
    fullList: [
      'beIN Sports 2 Premium', 'beIN Sports 3 Premium', 'beIN Sports 4 HD', 'beIN Sports 5 HD', 'beIN Sports 6 HD', 'beIN Sports 7 HD', 
      'beIN Sports 8 HD', 'beIN Sports 9 HD', 'beIN Sports 10 HD', 'beIN Sports 11 HD EN', 'beIN Sports 12 HD EN', 'beIN Sports 13 HD FR', 
      'beIN Sports 14 HD FR', 'beIN Sports 15 HD ES', 'beIN Sports 16 HD ES', 'beIN Sports News HD', 'beIN Sports AFC 1', 
      'beIN Sports AFC 2', 'beIN Sports AFC 3', 'beIN Sports AFC 4', 'beIN Movies 1 HD', 'beIN Movies 2 HD', 'beIN Movies 3 HD', 
      'beIN Movies 4 HD', 'beIN Series 1 HD', 'beIN Series 2 HD', 'beIN Drama HD', 'beIN Gourmet HD', 'OSN Movies Action', 
      'OSN Movies Thriller', 'OSN Movies Comedy', 'OSN Movies Kids', 'OSN Series First', 'OSN Series Comedy', 'OSN Showcase', 
      'OSN Pop Up', 'OSN Ya Hala', 'OSN Ya Hala Al Oula', 'OSN Ya Hala Cinema', 'OSN Kidzone', 'OSN Mezze', 'MBC 2 HD', 'MBC 3 HD', 
      'MBC 4 HD', 'MBC Action HD', 'MBC Max HD', 'MBC Bollywood HD', 'MBC Drama HD', 'MBC Masr HD', 'MBC Masr 2 HD', 'Rotana Drama', 
      'Rotana Khalijia', 'Rotana Music', 'Rotana Classic', 'Rotana Clip', 'Al Jazeera HD', 'Al Jazeera Documentary HD', 'Al Jazeera Mubasher', 
      'Al Arabiya HD', 'Al Hadath HD', 'Sky News Arabia HD', 'Abu Dhabi Sports 1 HD', 'Abu Dhabi Sports 2 HD', 'Abu Dhabi Sports 3 HD', 
      'Abu Dhabi Sports 4 HD', 'Abu Dhabi Sports 5 HD', 'Abu Dhabi Sports 6 HD', 'SSC Sports 1 HD', 'SSC Sports 2 HD', 'SSC Sports 3 HD', 
      'SSC Sports 4 HD', 'SSC Sports 5 HD', 'SSC Sports 6 HD', 'SSC Sports 7 HD', 'SSC Sports 8 HD', 'Al Kass 1 HD', 'Al Kass 2 HD', 
      'Al Kass 3 HD', 'Al Kass 4 HD', 'Al Kass 5 HD', 'Dubai TV HD', 'Dubai Sports 1 HD', 'Dubai Sports 2 HD', 'Dubai Racing HD', 
      'Sharjah TV HD', 'Sharjah Sports HD', 'Oman TV HD', 'Oman Sports HD', 'Kuwait TV HD', 'Kuwait Sports HD', 'Bahrain TV HD', 
      'Bahrain Sports HD', 'Saudi 1 HD', 'Saudi 2 HD', 'AlQuran AlKareem HD', 'AlSunnah AlNabawiyah HD', 'Nessma TV', 'Hannibal TV', 
      'El Hiwar Ettounsi', 'Attessia TV', 'Echourouk TV', 'Ennahar TV', 'Al Aoula HD', 'Arryadia HD', '2M Monde HD', 'Medi 1 TV HD'
    ]
  },
  { 
    id: 21, region: 'mena', name: 'India Premium 🇮🇳', count: '220+', desc: 'Star Plus, Star Sports, Zee, Sony, Colors', iconType: 'tv',
    searchTerms: 'india hindi tamil telugu cricket star sports sony zee colors bollywood',
    featured: ['Star Plus HD', 'Zee TV HD', 'Sony Entertainment HD', 'Colors HD', 'Star Sports 1 HD', 'Sony Ten 1 HD'],
    fullList: [
      'Star Sports 2 HD', 'Star Sports 3 HD', 'Star Sports 4 HD', 'Star Sports Select 1 HD', 'Star Sports Select 2 HD', 
      'Star Sports Hindi 1 HD', 'Star Sports Hindi 2 HD', 'Sony Ten 2 HD', 'Sony Ten 3 HD', 'Sony Ten 4 HD', 'Sony Six HD', 
      'Sony Ten Golf HD', 'Sports18 1 HD', 'Sports18 Khel', 'DD Sports', 'EuroSport India HD', 'Star Movies HD', 'Star Movies Select HD', 
      'Sony PIX HD', 'MN+ HD', 'Movies Now HD', 'Romedy Now HD', '&flix HD', '&privé HD', 'Zee Cinema HD', 'Sony MAX HD', 'Star Gold HD', 
      'Colors Cineplex HD', 'B4U Movies', 'UTV Action', 'UTV Movies', 'Filmy', 'Zee Classic', 'Zee Action', 'Star Bharat HD', 
      'Sony SAB HD', '&TV HD', 'Star World HD', 'Star World Premiere HD', 'Zee Café HD', 'Colors Infinity HD', 'Comedy Central India HD', 
      'Disney International HD', 'Discovery India HD', 'History TV18 HD', 'Nat Geo India HD', 'Nat Geo Wild India HD', 'Animal Planet India HD', 
      'Sony BBC Earth HD', 'TLC India HD', 'Fox Life India HD', 'Travel XP HD', 'NDTV 24x7', 'India Today HD', 'Times Now HD', 
      'Republic TV HD', 'CNN News18 HD', 'Mirror Now', 'WION', 'Aaj Tak HD', 'ABP News HD', 'Zee News HD', 'India TV', 'News18 India', 
      'NDTV India', 'Cartoon Network India', 'Pogo', 'Nickelodeon India', 'Nick Jr India', 'Sonic Nickelodeon', 'Disney Channel India', 
      'Hungama TV', 'Sun TV HD', 'KTV HD', 'Sun Music HD', 'Star Vijay HD', 'Zee Tamil HD', 'Colors Tamil HD', 'Star Maa HD', 
      'Gemini TV HD', 'Zee Telugu HD', 'ETV Telugu HD', 'Asianet HD', 'Surya TV HD', 'Mazhavil Manorama HD', 'Star Suvarna HD', 
      'Udaya TV HD', 'Zee Kannada HD', 'Colors Kannada HD', 'Star Jalsha HD', 'Zee Bangla HD', 'Colors Bangla HD', 'PTC Punjabi', 
      'Zee Punjabi', 'Big FM India', 'Radio Mirchi', 'Red FM'
    ]
  },
  { 
    id: 22, region: 'mena', name: 'Pakistan & Bangladesh 🇵🇰 🇧🇩', count: '105+', desc: 'PTV Sports, Geo, ARY, T Sports, Somoy', iconType: 'globe',
    searchTerms: 'pakistan bangladesh ptv sports geo ary hum tv t sports somoy',
    featured: ['PTV Sports HD', 'Ten Sports PK', 'Geo News HD', 'ARY Digital HD', 'Hum TV HD', 'T Sports HD'],
    fullList: [
      'A Sports HD', 'Geo Super HD', 'Fast Sports', 'ARY Sports', 'GTV (Gazi TV)', 'Tsports Extra', 'BTV Sports', 'ARY News HD', 
      'Samaa TV HD', 'Dunya News HD', 'Express News HD', 'Bol News HD', '92 News HD', 'Hum News HD', 'Dawn News HD', 'Aaj News', 
      'Capital TV', 'Geo Entertainment HD', 'ARY Zindagi', 'Hum Sitaray', 'Express Entertainment', 'Urdu 1 HD', 'A Plus Entertainment', 
      'TV One PK', 'Play Entertainment', 'PTV Home', 'PTV National', 'PTV Global', 'ARY Qtv', 'Madani Channel', 'Makkah Live', 
      'Madina Live', 'Somoy TV HD', 'Jamuna TV HD', 'Channel 24 BD', 'Independent TV BD', 'Ekattor TV', 'News24 BD', 'DBC News', 
      'ATN News', 'BTV National', 'BTV World', 'ATN Bangla', 'Channel i HD', 'NTV BD HD', 'RTV BD HD', 'Banglavision', 'Boishakhi TV', 
      'Desh TV', 'Maasranga TV HD', 'Mohona TV', 'My TV BD', 'Nagorik TV', 'SA TV', 'Asian TV BD', 'Gaan Bangla HD', 'ARY Musik', 
      '8XM', 'Jalwa TV', 'Cartoon Network PK', 'Nickelodeon PK', 'Kids Zone PK', 'Duronto TV', 'Radio Pakistan', 'FM 89', 'FM 91', 
      'Suno FM', 'Radio Foorti', 'Dhaka FM', 'Spice FM'
    ]
  },
  { 
    id: 23, region: 'mena', name: 'Australia & NZ 🇦🇺 🇳🇿', count: '110+', desc: 'Fox Sports, Kayo, Sky Sport NZ, Channel 7', iconType: 'monitor',
    searchTerms: 'australia new zealand aus nz fox sports kayo sky sport spark afl nrl',
    featured: ['Fox League HD', 'Fox Footy HD', 'Fox Cricket HD', 'Sky Sport NZ 1', 'Channel 7 HD', 'Channel 9 HD'],
    fullList: [
      'Fox Sports 503 HD', 'Fox Sports 505 HD', 'Fox Sports 506 HD', 'Fox Sports More HD', 'ESPN Australia HD', 'ESPN 2 Australia HD', 
      'beIN Sports 1 AU', 'beIN Sports 2 AU', 'beIN Sports 3 AU', 'Optus Sport 1', 'Optus Sport 2', 'Optus Sport 3', 'Optus Sport 4', 
      'Stan Sport 1', 'Stan Sport 2', 'Racing.com', 'Sky Racing 1', 'Sky Racing 2', 'Sky Sport NZ 2', 'Sky Sport NZ 3', 'Sky Sport NZ 4', 
      'Sky Sport NZ 5', 'Sky Sport NZ 6', 'Sky Sport NZ 7', 'Sky Sport NZ 8', 'Sky Sport NZ 9', 'Sky Sport Select NZ', 'Spark Sport 1', 
      'Spark Sport 2', 'Channel 10 HD', 'ABC TV HD AU', 'SBS HD AU', '7mate HD', '7two', '7flix', '9Gem HD', '9Go!', '9Life', '9Rush', 
      '10 Bold', '10 Peach', '10 Shake', 'ABC News AU', 'ABC Kids / TV Plus', 'ABC ME', 'SBS Viceland', 'SBS Food', 'SBS World Movies', 
      'NITV', 'TVNZ 1 HD', 'TVNZ 2 HD', 'TVNZ Duke', 'Three NZ HD', 'Bravo NZ', 'Maori Television', 'Prime NZ', 'Fox Showcase HD', 
      'Fox Hits HD', 'Fox Funny HD', 'Fox Docos HD', 'Fox Sleuth HD', 'Fox Sci Fi HD', 'BBC First AU', 'UKTV AU', 'Universal TV AU', 
      'Discovery AU HD', 'Nat Geo AU HD', 'History AU HD', 'Crime & Investigation AU', 'A&E AU', 'TLC AU', 'Lifestyle AU', 
      'Lifestyle Food AU', 'Lifestyle Home AU', 'Disney Channel AU', 'Cartoon Network AU', 'Nickelodeon AU', 'Sky News Australia', 
      'Sky News Weather', 'Sky News Extra', 'Nova 96.9', 'KIIS 1065', 'Triple M', 'Fox FM', 'Triple J', 'The Edge NZ', 'ZM NZ', 'More FM NZ'
    ]
  }
];