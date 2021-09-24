var config = {
    style: 'mapbox://styles/antievictionmap/ckr5hn2up01ry18mv2p69uzd2/draft?fresh=true',
    accessToken: 'pk.eyJ1IjoiYW50aWV2aWN0aW9ubWFwIiwiYSI6ImNrazF6dWs2ZzA2OHQyd251eGxoc2IyYzQifQ.lQbeWzEMZhhvSNpsbo34wQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Making Nuisance Neighborhoods',
    subtitle: 'Exposing the Effects of Community Policing in Los Angeles',
    byline: 'Anti-Eviction Mapping Project and Institute on Inequality and Democracy',
    footer: '<img src = "images/IID_logo.png" width = "450" height = "150"> <br> <img src = "images/aemp_logo.png" width = "350" height = "100"> <br> <br> Created with Mapbox Community Solutions',
    chapters: [
        {
            id: 'intro-a',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            description: 'The Los Angeles Citywide Nuisance Abatement Program (CNAP) allows the City Attorney to sue the owners of “nuisance” buildings and mandate owners to install surveillance, evict tenants, or even shut down the property. The program binds together housing and policing, often in service of redevelopment and gentrification.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro-b',
            alignment: 'center',
            hidden: false,
            description: 'Rocky Delgadillo closely supervised CNAP as City Attorney from 2001-2009. Now, as a real estate sector lawyer, he advises clients who are keen to invest in neighborhoods that have “good bones” but that were once “controlled by gangs.”',
            location: {
                center: [-118.24284, 34.05381],
                zoom: 17,
                pitch: 60.00,
                bearing: 128.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'city_hall',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'city_hall',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'intro-c',
            alignment: 'center',
            hidden: false,
            description: '<p> We obtained records for 121 CNAP cases, ranging from 2003-2018. While the specifics of each lawsuit varied between cases, the injunctions required several common abatement strategies that intruded on the lives of tenants. </p> <p>This story map dives into the story of six CNAP properties to understand how the program has deeply impacted tenants on the properties, as well as organization and resistance to the program. </p>',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CNAP',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'CNAP',
                     opacity: 0
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 0
                }
            ]
        },
        {
            id: 'intro-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27014, 33.98745],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CNAP',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases_labels',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'CNAP',
                     opacity: 0
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 0
                },
                {
                   layer: 'CNAP_cases_labels',
                   opacity: 0
               }
            ]
        },
        {
            id: 'intro-d',
            alignment: 'center',
            hidden: false,
            bookmarks: 'Scroll through the story map or select a theme and case study to learn more. <ul><li><a href="#69th-Main-a">Racist "Community" Policing: 69th and Main</a></li> <li><a href="#surveillance-a">Surveillance: Las Palmas Motel</a></li> <li><a href="#redevelopment-a">Real Estate Speculation: Frontier Hotel</a></li><li><a href="#house-rules-a">House Rules: 109th Place</a></li><li><a href="#banishment-a">Banishment: Franklin Square</a></li><li><a href="#vacate-a">VACATE</a></li><li><a href="#tenant-a">Tenant Power: Chesapeake Apartments</a></li><li><a href="#methods-a">Methodological Note and Acknowledgements</a></li></ul>',
            location: {
                center: [-118.27014, 33.98745],
                zoom: 11.00,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CNAP',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 1
                 },
                 {
                    layer: 'CNAP_cases_labels',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'CNAP',
                     opacity: 0
                 },
                 {
                    layer: 'CNAP_cases',
                    opacity: 0
                },
                {
                   layer: 'CNAP_cases_labels',
                   opacity: 0
               }
            ]
        },
        {
            id: 'racial-policing-a',
            alignment: 'center',
            hidden: false,
            title: 'Racist "Community" Policing',
            description: 'While the CNAP program applies to the entire City of Los Angeles, the city attorney has overwhelmingly filed nuisance abatement complaints on properties located in predominantly Black and Latinx neighborhoods.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-c',
            alignment: 'center',
            hidden: false,
            description: 'The City Attorney provides little information about how CNAP properties are chosen, relying nearly entirely on LAPD discretion, which legal documents reveal to be based heavily in racist policing. CNAP creates another layer of state violence in already heavily policed neighborhoods of Los Angeles.  For more on this, look at <a href="https://stoplapdspying.org/about-slsc/">Stop LAPD Spying&#39s</a> work in Los Angeles.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'race_county',
                opacity: 0.75
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'race_county',
                opacity: 0
            }
            ]
        },
        {
            id: 'racial-policing-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {
                layer: 'race_county',
                opacity: 0.75
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {
                layer: 'race_county',
                opacity: 0
            }
        ]
        },
        {
            id: 'racial-policing-d',
            alignment: 'center',
            hidden: false,
            description: 'Press play to hear Pete White, co-founder of LA Community Action Network (LA CAN) talk about redevelopment and displacement in residential hotels in downtown Los Angeles.',
            video: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/614465391&color=%234c5464&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'race_county',
                opacity: 0.75
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'race_county',
                opacity: 0
            }
            ]
        },
        {
            id: '69th-Main-a',
            alignment: 'left',
            hidden: false,
            title: '69th and Main',
            description: 'In 2004, City Attorney Rocky Delgadillo filed a landmark lawsuit on three apartment buildings at 69th and Main, alleging that the complex served as gang headquarters for the 69 East Coast Crips for more than 20 years.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 11.0,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: '69_main_overview',
                    opacity: 1
                 },
                 {
                    layer: '69_main_label',
                    opacity: 1
                 }
            ],
            onChapterExit: [
                 {
                     layer: '69_main_overview',
                     opacity: 0
                 },
                 {
                    layer: '69_main_label',
                    opacity: 0
                }
            ]
        },
        {
            id: '69th-Main-b',
            alignment: 'left',
            hidden: false,
            subttitle: '<i> Echoes of Gang Injunctions',
            description: 'The language used in the lawsuit to justify this injunction is sensational and heavily racialized. <blockquote> <b> “The use of the Apartments by the Crips has turned the surrounding community into an urban gang war zone and poses a clear and present danger to the community.” </b></blockquote>',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: '69th-Main-x',
            alignment: 'full',
            hidden: false,
            subttitle: '<i> Racialized Policing',
            image: 'images/69_language.png',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: '69th-Main-c',
            alignment: 'left',
            hidden: false,
            subtitle: '<i>Closure and Relocation',
            image: 'images/69_demo.png',
            description: '<i><small><center> Image: 69th and Main Demolition </center></small></i> <br> This was the first case that closed down a property through a preliminary injunction, completely vacating its units and disallowing renting to new tenants. After becoming involved in the property’s closure, Councilwoman Jan Perry’s office had to secure emergency funding for the tenants displaced during the closure.',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: '69th-Main-d',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Redevelopment',
            image: 'images/69_render.png',
            description: '<i><small><center> Image: 69th and Main Redevelopment Rendering </center></small></i> <br>The Community Redevelopment Agency purchased the properties at 69th and Main in 2006 for redevelopment into townhomes, and demolition was underway by 2007. The property lay vacant for more than a decade after the dissolution of the CRA. In 2018, ownership was transferred to the City of Los Angeles, which used the site for a permanent supportive housing development funded through Proposition HHH and opened in 2020.',
            bookmarks: '<a href="#intro-d">Back to Top</a>',
            location: {
                center: [-118.27665, 33.97609],
                zoom: 16.17,
                pitch: 53.50,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '69_main',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '69_main',
                opacity: 0
            }
        ]
        },
        {
            id: 'surveillance-a',
            alignment: 'center',
            hidden: false,
            title: 'Surveillance at CNAP Properties',
            description: 'CNAP properties are subject to increased surveillance, before and after the formal injunction. Many of these properties had already been subject to increased surveillance under previous programs, such as gang injunctions or FALCON.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'surveillance-b',
            alignment: 'center',
            hidden: false,
            description: 'Of the CNAP properties where we have surveillance information, 90% were surveilled for over a year and nearly half for at least two years. Some properties have been under increased surveillance for over a decade.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_surveil',
                opacity: 1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_surveil',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-c',
            alignment: 'center',
            hidden: false,
            description: 'CNAP increases policing and surveillance around the properties, invading the privacy of residents while increasing chances of arrest and eviction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_surveil',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_surveil',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-d',
            alignment: 'center',
            hidden: false,
            description: 'Many properties required increased surveillance, including direct video feed access for the LAPD.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_video',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_video',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-e',
            alignment: 'center',
            hidden: false,
            description: 'Additionally, LAPD was given warrantless access to the property, including key pad codes and gate clickers for easy access at any time. ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_access',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_access',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-f',
            alignment: 'center',
            hidden: false,
            description: 'Private security guards, often armed, were required.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_guards',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_guards',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-g',
            alignment: 'center',
            hidden: false,
            description: 'Tenants had to provide identification for themselves and any of their visitors to their property. ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_identity',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_identity',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-h',
            alignment: 'center',
            hidden: false,
            description: 'LAPD created lists of people who were banished from the property.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_banish',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_banish',
                opacity: 0}
        ]
        },
        {
            id: 'surveillance-i',
            alignment: 'center',
            hidden: false,
            description: 'Tenants lived under increased surveillance with the threat of eviction as the default for breaking any number of these rules.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
             {  layer: 'CNAP_banish',
                opacity:1
            }
            ],
            onChapterExit: [
            {   layer: 'CNAP_banish',
                opacity: 0}
        ]
        },
        {
            id: 'palmas-a',
            alignment: 'left',
            hidden: false,
            title: 'Las Palmas Motel',
            description: '<i><small><center> Image: Las Palmas Motel </center></small></i> <br> The City Attorney’s Office filed a CNAP complaint for the Las Palmas Motel, a 10-room motel located in South Central Los Angeles providing both short-term lodging and longer-term housing at low costs. Las Palmas was under surveillance since 2004 and the case filing alleges that the property was a “notorious stronghold and refuge for members and associates of the Florencia 13 criminal street gang.”',
            image: 'images/palmas.png',
            location: {
                center: [-118.28329, 33.96715],
                zoom: 11,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas_overview',
                opacity: 1
             },
             {
                layer: 'palmas_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas_overview',
                opacity: 0
            },
            {
                layer: 'palmas_label',
                opacity: 0
             }
        ]
        },
        {
            id: 'palmas-b',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Surveillance',
            description: 'Like many CNAP cases, the preliminary injunction ordered the property owner to install a video-monitoring system accessible by the LAPD through an internet feed and compatibility with mobile applications, detailed screening and registration of all guests and their vehicles, and armed and licensed security guards. Even further, the final injunction includes additional requirements to ensure that the LAPD can have access to the property.',
            location: {
                center: [-118.27413, 33.96668],
                zoom: 17.16,
                pitch: 60.00,
                bearing: -93.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas',
                opacity: 0
            }
        ]
        },
        {
            id: 'palmas-x',
            alignment: 'full',
            hidden: false,
            description: '',
            image: 'images/palmas_snip.png',
            bookmarks: '<center><a href="#intro-d">Back to Top</a>',
            location: {
                center: [-118.27413, 33.96668],
                zoom: 17.16,
                pitch: 60.00,
                bearing: -93.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'palmas',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'palmas',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-a',
            alignment: 'center',
            hidden: false,
            title: 'CNAP as Real Estate Speculation',
            description: 'In many cases, the end result of a CNAP injunction is the sale and potential redevelopment of the property.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-b',
            alignment: 'center',
            hidden: false,
            description: 'Nearly half of CNAP properties in the dataset were sold after the injunction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
            },
            {  layer: 'CNAP_owner',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-c',
            alignment: 'center',
            hidden: false,
            description: 'A quarter of properties were sold at least twice.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
            },
            {  layer: 'CNAP_owner',
                opacity: 1
            },
            {  layer: 'CNAP_owner_second',
               opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0
            },
            {   layer: 'CNAP_owner_second',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-x',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_owner',
                opacity: 1
            },
            {  layer: 'CNAP_owner_second',
               opacity: 1
           }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0
            },
            {   layer: 'CNAP_owner_second',
                opacity: 0
            }
        ]
        },
        {
            id: 'redevelopment-d',
            alignment: 'center',
            hidden: false,
            description: 'While developers are not explicitly involved in the CNAP lawsuits, the resulting property sales transform often desirable nuisance properties into more profitable developments. Residents are evicted or relocated in this process, effectively banished from their community by the CNAP injunction.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             },
             {  layer: 'CNAP_owner',
                opacity: 1
            },
            {  layer: 'CNAP_owner_second',
               opacity: 1
           }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            },
            {   layer: 'CNAP_owner',
                opacity: 0
            },
            {   layer: 'CNAP_owner_second',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-a',
            alignment: 'right',
            hidden: false,
            title: 'Frontier Hotel',
            image: 'images/rosslyn.jpeg',
            description: '<i><small><center> Image: Frontier Hotel, now Rosslyn Lofts </center></small></i> <br> Frontier Hotel was a famous Single Room Occupancy (SRO) hotel located in Skid Row and was home to many families, including LA CAN organizer Steve Diaz. This was one of the first properties placed under a CNAP injunction, establishing precedent for future policing and redevelopment of other SROs. ',
            location: {
                center: [-118.19236, 34.05574],
                zoom: 11.69,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier_overview',
                opacity: 1
             },
             {
                layer: 'frontier_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'frontier_overview',
                opacity: 0
            },
            {
                layer: 'frontier_label',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-b',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Embedded Policing',
            description: 'The property was placed under intense police surveillance and a nuisance abatement injunction was filed against the hotel owners in 2003. In a striking example of police control, the final judgement allowed the LAPD to use the hotel as a police substation for four years. ',
            location: {
                center: [-118.24728, 34.04775],
                zoom: 16.75,
                pitch: 70.00,
                bearing: -35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-c',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Redevelopment',
            description: '<i><small><center> Press play to hear Becky Dennison discuss redevelopment and evictions at the Alexandria Hotel. </center></small></i> <br> The California Redevelopment Agency (CRA) provided a large construction loan to a private developer, the Amerland Group, that was already under fire from housing justice movements for its harassment of tenants at another residential hotel, the Alexandria. The hotel was transformed into the Rossyln Lofts, a “mixed-income” development which presents itself as located in the “heart of historic Downtown Los Angeles.” ',
            video: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/614465391&color=%234c5464&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"></iframe>',
            location: {
                center: [-118.24728, 34.04775],
                zoom: 16.75,
                pitch: 70.00,
                bearing: -35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'frontier-d',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Tenant Organizing',
            video: '<center> <iframe src="https://player.vimeo.com/video/306512688?h=717b993ec2#t=47s" width="350" height="200" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>',
            description: '<i><small><center> Press play to hear the LA Poverty Department perform Steve Diaz&#39s story.  </center></small></i> <br> These CNAP injunctions and CRA development deals catalyzed Skid Row organizing led by LA CAN. As Steve Diaz puts it: “I was moved that people were actually trying to change stuff and it wasn’t that it was just me by myself or people in my building by themselves.” ', 
            bookmarks: '<a href="#intro-d">Back to Top</a>',
            location: {
                center: [-118.24728, 34.04775],
                zoom: 16.75,
                pitch: 70.00,
                bearing: -35.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'frontier',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'frontier',
                opacity: 0
            }
        ]
        },
        {
            id: 'house-rules-a',
            alignment: 'center',
            hidden: false,
            title: 'House Rules',
            description: 'CNAP injunctions require property owners to institute strict house rules intended to control behavior, in addition to constant physical and video surveillance. And yet, tenants have no standing in public nuisance law. The detailed list of potential infractions on the next page has led tenants to ask: “are these constitutional?” ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'house-rules-b',
            alignment: 'full',
            hidden: false,
            image: 'images/house_rules.png',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'house-rules-c',
            alignment: 'center',
            hidden: false,
            description: 'The oppressive rules make it clear that all tenant activity, or simply living at home, is met with suspicion. Any alleged violation will be considered an “incurable breach” and by default the only allowable resolution is eviction.     ',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '109-a',
            alignment: 'left',
            hidden: false,
            title: '607 E 109th Place',
            description: '607 E 109th Place is an eight-unit property in the Green Meadows Neighborhood of South Central. A CNAP complaint was filed in April 2015, resulting in intensive surveillance and housing precarity for the residents.',
            location: {
                center: [-118.37718, 33.95],
                zoom: 10.77,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109_overview',
                opacity: 1
             },
             {
                layer: '109_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '109_overview',
                opacity: 0
            },
            {
                layer: '109_label',
                opacity: 0
             }
        ]
        },
        {
            id: '109-b',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Surveillance',
            description: '<i><small><center> Image: House rules displayed on the property </center></small></i> <br>As mandated by the injunction, video surveillance was required to “observe the identity and activity of all individuals entering, leaving, and moving around the property.” Still, the perpetual gaze in the form of video technology was not enough as unlimited physical access was granted to LAPD to conduct “regular and frequent” foot patrols devoid of any reason or warrant.',
            image: 'images/109_sign.png',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             },
             {
                layer: 'surveillance',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            },
            {
                layer: 'surveillance',
                opacity: 0
            }
        ]
        },
        {
            id: '109-c',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> House Rules',
            description: 'The injunction included the enactment of strict house rules: <ul> <li>requiring residents to disclose the names of all household members on an ongoing basis, even if the household composition has not changed </li> <li> Visitors must sign in with the manager immediately upon entry of the property </li> <li> Visitors must always remain accompanied while on the premises </li> </ul> The violation of any of these rules guaranteed eviction.',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            }
        ]
        },
        {
            id: '109-d',
            alignment: 'left',
            hidden: false,
            subtitle: '<i> Eviction',
            bookmarks: '<a href="#intro-d">Back to Top</a>',
            description: 'A senior tenant who spent their entire life residing at the property was evicted from their home of nearly 50 years several months after CNAP due to an alleged nuisance activity connected their granddaughter’s guest.',
            location: {
                center: [-118.26601, 33.93542],
                zoom: 16.33,
                pitch: 60.00,
                bearing: -91.37
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: '109',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: '109',
                opacity: 0
            }
        ]
        },
        {
            id: 'banishment-a',
            alignment: 'center',
            hidden: false,
            title: 'Banishment',
            description: 'Stay away orders are prevalent in CNAP. Approximately 30% of our 121 CNAP complaints included such orders, which named specific tenants who were to be banished from the property and neighborhood, sometimes as many as 20-30 people. <br><em>Note: We refuse to further participate in the surveillance state and have chosen to strike out the names of the people banished from the property.</em>',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'banishment-x',
            alignment: 'full',
            hidden: false,
            description: '',
            image: 'images/palmas_list.png', 
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'banishment-b',
            alignment: 'center',
            hidden: false,
            description: 'Several more CNAP cases had broad and vague requirements, such as this: <blockquote><em><b>“Defendants shall not rent or allow access to the Property to persons known to Defendants or their agents to be members or associates of the Eastside Wilmas or Westside criminal street gangs or any other gang.” </em></b></blockquote>In some cases, the stay away orders provide absurdly detailed instructions: <blockquote><em><b>“Defendant shall remain at least 250 feet away from the Property at all times and shall not return to the Property for any reason. However, Defendant may transit upon 3rd Street (but not Bonnie Brae Street), as necessary for legitimate travel purposes, but may not linger, remain or loiter on that street. </em></b></blockquote>',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'banishment-c',
            alignment: 'center',
            hidden: false,
            description: 'CNAP banishment lists typically provide “incident dates” which conjure up crime and conviction. Today’s nuisance abatement and gang injunctions racialize bodies through lists and rules, marking people criminal through rules and surveillance. Such supervision is both targeted and arbitrary.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'franklin-a',
            alignment: 'left',
            title: 'Franklin Square',
            hidden: false,
            description: 'In 2010, the LA City Attorney filed CNAP complaints against seven properties clustered in “a small neighborhood of single-family homes known as Franklin Square, which is located within the larger Watts area of South Los Angeles.” Aimed at the “turf” of the Grape Street and Franklin Square Crips gangs, the filings express concern about the “geographic insulation” and “dead-end layout” of this “accident of urban design that created an ideal haven for gang members.” ',
            location: {
                center: [-118.37718, 33.95],
                zoom: 10.77,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'franklin_label',
                opacity: 1
            }
            ],
            onChapterExit: [{
                layer: 'franklin_label',
                opacity: 0
            }]
        },
        {
            id: 'franklin-b',
            alignment: 'left',
            hidden: false,
            description: 'In language repeated across all 7 cases, the complaint reads: <blockquote><em><b>“Part and parcel with this brazen drug-dealing, large groups of gang members congregate on the Properties, and on the sidewalks and streets that connect the Properties. There, day and night, they gamble, party, and otherwise openly and notoriously occupy their turf so as to project their control over this small neighborhood in a manner that restricts law-abiding residents’ quiet enjoyment of their property and personal lives, and intimidates them from cooperating with law enforcement agents in efforts to combat the gang and its grip on the Franklin Square neighborhood.” </b></em> </blockquote>',
            location: {
                center: [-118.25697, 33.94727],
                zoom: 14.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'franklin',
                opacity: 1
            }
            ],
            onChapterExit: [
            {
                layer: 'franklin',
                opacity: 0
            }
        ]
        },
        {
            id: 'franklin-c',
            alignment: 'left',
            hidden: false,
            description: 'Detached from the CNAP lawsuits and circulating in the PowerPoint presentations of CNAP prosecutors is a banishment poster, with the names and faces of those who have been ordered by the CNAP injunction “to stay out of the Franklin Square neighborhood.” Subsequent PowerPoint slides indicate that such flyers were distributed door to door by LAPD. <br><em> Note: Names and faces have been obscured to avoid further participation in surveillance. ',
            location: {
                center: [-118.25697, 33.94727],
                zoom: 14.01,
                pitch: 0.00,
                bearing: 0.00
                },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            {
                layer: 'franklin',
                opacity: 1
            }
            ],
            onChapterExit: [
            {
                layer: 'franklin',
                opacity: 0
            }
        ]
        },
        {
            id: 'franklin-x',
            alignment: 'full',
            hidden: false,
            description: '',
            bookmarks: '<center><a href="#intro-d">Back to Top</a>',
            image: 'images/franklin.png',
            location: {
                center: [-118.25697, 33.94727],
                zoom: 14.01,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vacate-a',
            alignment: 'right',
            hidden: false,
            title: 'VACATE',
            description: 'In addition to CNAP injunctions, the city attorney’s office employs the Narcotics, Violent Crime, and Gang-Related Crime Eviction Ordinance, through the VACATE (Violence and Crime Activated Tenant Eviction) program. This program requires landlords to immediately evict tenants “involved” in illegal activity on the premises or “within 1000-foot radius from the boundary line of the premises.” Evictions are unjustly demanded preemptively as the majority of VACATE letters are sent out prior to any tenant conviction. ',
            location: {
                center: [-117.91573, 33.95623],
                zoom: 8.82,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'vacate',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'vacate',
                opacity: 0
            }]
        },
        {
            id: 'vacate-b',
            alignment: 'right',
            hidden: false,
            description: '<b>Example VACATE Cases:</b> <ul><li>2103 S Orange Dr in Mid-City: the city attorney’s VACATE letter sent in October 2019 demanded eviction of the tenant 41 days prior to any conviction </li> <li>3531 E 6th St in Boyle Heights: the letter from March 2019 was sent 93 days prior to conviction.</li> <li>6075 Franklin Ave in Hollywood: the letter was sent in November 2019, but a conviction was not found until March 2021—more than 460 days after the date of the incident.</li></ul>',
            location: {
                center: [-117.91573, 33.95623],
                zoom: 8.82,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'vacate',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'vacate',
                opacity: 0
            }]
        },
        {
            id: 'vacate-x',
            alignment: 'full',
            hidden: false,
            description: '',
            image: 'images/vacate.png',
            location: {
                center: [-117.91573, 33.95623],
                zoom: 8.82,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'vacate',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'vacate',
                opacity: 0
            }]
        },
        {
            id: 'vacate-c',
            alignment: 'right',
            hidden: false,
            description: 'The VACATE program preemptively criminalizes tenants taking away their homes before any criminal court proceedings and presumes a conviction will always be found, yet several cases remaining pending today. At 2018 S Harcourt Ave in Mid-City and 2720 Manitou Ave in Lincoln Heights, both properties had VACATE letters sent in early 2020, but the cases today remain pending—surpassing more than 500 days since the date of their incidents. ',
            bookmarks: '<a href="#intro-d">Back to Top</a>',
            location: {
                center: [-117.91573, 33.95623],
                zoom: 8.82,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'vacate',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'vacate',
                opacity: 0
            }]
        },
        {
            id: 'tenant-a',
            alignment: 'center',
            title: 'Tenant Power',
            hidden: false,
            description: 'These forms of surveillance and house rules are not unique to CNAP but rather engrained into housing programs and policies in the U.S., notably public housing. Tenants have always organized and continue to do so. This research and storymap is inspired by such tenant power.',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chesapeake-a',
            alignment: 'right',
            hidden: false,
            title: 'Chesapeake Apartments',
            description: 'The Chesapeake Apartments is 425-unit complex in the Baldwin Village neighborhood of Los Angeles. A CNAP injunction was filed against the property owner in November 2017, placing the property under surveillance, instituting house rules, and evicting tenants. Unlike similar CNAP cases, Chesapeake residents formed a tenant association and intervened in the lawsuit against their property owner. ',
            location: {
                center: [-118.27252, 34.00935],
                zoom: 11.21,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake_overview',
                opacity: 1
             },
             {
                layer: 'chesapeake_label',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake_overview',
                opacity: 0
            },
            {
                layer: 'chesapeake_label',
                opacity: 0
             }
        ]
        },
        {
            id: 'chesapeake-b',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> House Rules',
            description: '<i><small><center> Press play to hear Zerita Jones share her story </center></small></i> <br>Zerita Jones, a tenant of Chesapeake and leader of the tenant association, describes the house rules mandated by the 2017 injunction and the subsequent tenant organizing.',
            video: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/595684551&color=%234c5464&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true"</iframe>',
            location: {
                center: [-118.34569, 34.01919],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 39.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake',
                opacity: 0
            }
        ]
        },
        {
            id: 'chesapeake-c',
            alignment: 'right',
            hidden: false,
            subtitle: '<i> Tenant Organizing',
            description: 'Zerita and her fellow tenants formed a tenants association in response to these harsh rules, and for the first time, tenants intervened in the CNAP lawsuit. The residents won less strict house rules and prohibited the property owner from removing units from the rental market for four years. After their success, the TA is considering suing the property owner for maintenance issues on the building or turning the complex into a tenant-owned co-op. ',
            bookmarks: '<a href="#intro-d">Back to Top</a>',
            location: {
                center: [-118.34569, 34.01919],
                zoom: 16.00,
                pitch: 60.00,
                bearing: 39.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'chesapeake',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'chesapeake',
                opacity: 0
            }
        ]
        },
        {
            id: 'methods-a',
            alignment: 'full',
            hidden: false,
            title: 'Methodological Note and Acknowledgements',
            description: '<p> Our interest in CNAP is rooted in our work within, and with, tenant organizing in Los Angeles. A landmark 2017 CNAP case involving a massive residential complex, Chesapeake Apartments, first alerted us to the use of nuisance abatement in the governance of property and tenancy. Shayla Myers, who represented the tenants in the Chesapeake case provided invaluable guidance in this research. We filed a public records request in 2018 for CNAP cases starting in 2013, when the current LA City Attorney, Mike Feuer, took office. After many months of stalling, we received a list of addresses and then, after much persistence, 96 CNAP complaints as a pile of paper documents, which we then had to scan and digitize. </p> <p> Subsequently, information activist, Michael Kohlhaas, shared with us CNAP complaints that date back to 2010, giving us a total of 121 cases. With the guidance of Shayla Myers, public interest lawyer, we selected 27 cases for which we obtained all legal documents, including injunctions, settlements, and judgments. </p> <p> Our interviews with Jonathan Cristall, Assistant City Attorney in charge of CNAP, drew our attention to a related eviction program, VACATE. Cristall’s office provided the 38 VACATE letters filed in 2019. </p> <p> Given the secrecy that shrouds such data in Los Angeles, we cannot definitively assert that these CNAP cases and VACATE letters comprise the full universe of filings. However, case counts in various City Attorney reports and presentations indicate that what we have is close to a full set. Of course, there is an entire world of police surveillance records, e.g. the Consolidated Crime Analysis Database, and prosecutorial documents, e.g. CNAP “demand letters,” that serve as important background to such filings. We were unable to procure demand letters, which are nuisance warnings sent to property owners, since there is currently a lawsuit pending over access to such data. </p> <p> Finally, keenly aware that tenants have no standing in programs like CNAP, we have sought out archives from other bureaucracies, such as the Los Angeles Housing and Community Investment Department (HCID-LA), where we accessed records of tenant complaints. This work is done with the intention to repair the record by centering voices of tenants in processes that have otherwise moved forward without any accountability to tenant experiences and contributions. </p>',
            location: {
                center: [-118.27242, 34.00847],
                zoom: 8.68,
                pitch: 0.00,
                bearing: -3.29
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'CNAP',
                opacity: 1
             }
            ],
            onChapterExit: [{
                layer: 'CNAP',
                opacity: 0
            }
        ]
        }
        

    ]
};
