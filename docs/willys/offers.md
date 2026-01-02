## Offers

fetch("https://www.willys.se/_next/data/a4eecdbf/sv/erbjudanden.json", {
  "headers": {
    "accept": "*/*",
    "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en-SE;q=0.7,en-GB;q=0.6,en;q=0.5",
    "if-none-match": "\"172l4cwrd5w1r8t\"",
    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjExNTQxOTYiLCJhcCI6Ijc3MjMyNDIwMyIsImlkIjoiMWIwMTg5NDc3NTVmODM5OSIsInRyIjoiMTcxNGZkNDhhNDQwYzg4YWFjODhmZTFiYWZkNWIxNWMiLCJ0aSI6MTc1NjU0NTE3NTQ5M319",
    "priority": "u=1, i",
    "purpose": "prefetch",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "traceparent": "00-1714fd48a440c88aac88fe1bafd5b15c-1b018947755f8399-01",
    "tracestate": "1154196@nr=0-1-1154196-772324203-1b018947755f8399----1756545175493",
    "x-nextjs-data": "1"
  },
  "referrer": "https://www.willys.se/erbjudanden/ehandel",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

Response

{
    "pageProps": {
        "fallback": {
            "#pageType:\"ContentPage\",label:\"WillysPromotionPage\",endpoint:\"cms/page\",": {
                "uid": "WillysPromotionPage",
                "uuid": "eyJpdGVtSWQiOiJXaWxseXNQcm9tb3Rpb25QYWdlIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                "title": "Erbjudanden",
                "description": "Läs veckans erbjudanden från respektive butik och få unika erbjudanden på produkter du handlar ofta.",
                "canonical": "https://www.willys.se/promotions",
                "template": "WillysDynamicMasterTemplate",
                "typeCode": "ContentPage",
                "name": "Willys Promotions Page",
                "breadcrumbs": [],
                "slots": [
                    {
                        "slotId": "HeaderCenterSlot",
                        "slotUuid": "eyJpdGVtSWQiOiJIZWFkZXJDZW50ZXJTbG90IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                        "position": "HeaderCenter",
                        "name": "HeaderCenterSlot",
                        "slotShared": true,
                        "components": {
                            "component": [
                                {
                                    "uid": "WillysTopmenuLinksComponent",
                                    "uuid": "eyJpdGVtSWQiOiJXaWxseXNUb3BtZW51TGlua3NDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                                    "typeCode": "AxfoodTopmenuLinksComponent",
                                    "name": "AxfoodTopmenuLinksComponent",
                                    "container": "false",
                                    "synchronizationBlocked": "false",
                                    "navigationNode": {
                                        "uid": "WillysTopMenuLinksNavNode",
                                        "entries": [],
                                        "links": [],
                                        "children": [
                                            {
                                                "uid": "willysCampaignNode",
                                                "entries": [],
                                                "links": [
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv",
                                                                "value": "Erbjudanden"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/erbjudanden"
                                                    }
                                                ],
                                                "children": [],
                                                "title": "Erbjudanden"
                                            },
                                            {
                                                "uid": "willysStoreFinderNode",
                                                "entries": [],
                                                "links": [
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv",
                                                                "value": "Hitta butik"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/butik-sok"
                                                    }
                                                ],
                                                "children": [],
                                                "title": "Hitta butik"
                                            },
                                            {
                                                "uid": "willysCustomerServiceNode",
                                                "entries": [],
                                                "links": [
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/artikel/kundservice"
                                                    }
                                                ],
                                                "children": [],
                                                "title": "Kundservice"
                                            },
                                            {
                                                "uid": "item_00003PHK",
                                                "entries": [],
                                                "links": [
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv",
                                                                "value": "Willys Plus"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/artikel/om-oss/willys-plus"
                                                    }
                                                ],
                                                "children": [],
                                                "title": "Willys Plus"
                                            }
                                        ],
                                        "title": "Willys Top Menu Navigation Node"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "slotId": "HeaderLeftSlot",
                        "slotUuid": "eyJpdGVtSWQiOiJIZWFkZXJMZWZ0U2xvdCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "position": "HeaderLeft",
                        "name": "HeaderLeftSlot",
                        "slotShared": true,
                        "components": {
                            "component": [
                                {
                                    "uid": "SiteLogoComponent",
                                    "uuid": "eyJpdGVtSWQiOiJTaXRlTG9nb0NvbXBvbmVudCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                                    "typeCode": "SimpleBannerComponent",
                                    "name": "Site Logo Component",
                                    "container": "false",
                                    "external": "false",
                                    "synchronizationBlocked": "false",
                                    "media": {
                                        "code": "willys_logo.svg",
                                        "mime": "image/svg+xml",
                                        "altText": "Willys",
                                        "url": "https://media.occ.axfood.se/he9/h4c/8878098546718/willys_logo.svg"
                                    },
                                    "urlLink": "/",
                                    "target": "sameWindow"
                                }
                            ]
                        }
                    },
                    {
                        "slotId": "cs_00002MX7",
                        "slotUuid": "eyJpdGVtSWQiOiJjc18wMDAwMk1YNyIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "position": "TopWide",
                        "name": "Default TopWide for Willys Promotions Page",
                        "slotShared": false,
                        "components": {
                            "component": []
                        }
                    },
                    {
                        "slotId": "NavigationLeftSlot",
                        "slotUuid": "eyJpdGVtSWQiOiJOYXZpZ2F0aW9uTGVmdFNsb3QiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                        "position": "NavigationLeft",
                        "name": "NavigationLeftSlot",
                        "slotShared": true,
                        "components": {
                            "component": [
                                {
                                    "uid": "LeftMenuComponent",
                                    "uuid": "eyJpdGVtSWQiOiJMZWZ0TWVudUNvbXBvbmVudCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                                    "typeCode": "LeftMenuComponent",
                                    "name": "Left Menu Component",
                                    "container": "false",
                                    "linksRootNavigationNode": {
                                        "uid": "LeftMenuLinksNode"
                                    },
                                    "synchronizationBlocked": "false",
                                    "categoryRootNavigationNode": {
                                        "uid": "NavigationRootNode"
                                    },
                                    "navigationNode": {
                                        "uid": "LeftMenuLinksNode",
                                        "entries": [],
                                        "links": [],
                                        "children": [
                                            {
                                                "uid": "Header_menu",
                                                "entries": [],
                                                "links": [
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv",
                                                                "value": "Erbjudanden"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/erbjudanden"
                                                    },
                                                    {
                                                        "external": false,
                                                        "linkName": [
                                                            {
                                                                "key": "sv",
                                                                "value": "Mina vanligaste varor"
                                                            }
                                                        ],
                                                        "target": false,
                                                        "url": "/minavanligastevaror"
                                                    }
                                                ],
                                                "children": [
                                                    {
                                                        "uid": "Navigationnode_inspiration",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Allt till sommaren"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/sommar"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Årets nya glassar"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/glassnyheter"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Starta grillen här"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/grill"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Goda nyheter"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/nyheter"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Billigt och gott"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/billigmat"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Bra att ha hemma"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/braatthahemma"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Goda mellanmål"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/generationpep"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Eko-nomiska priser"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/eko"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Vego för alla"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/vego"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Schyssta priser på svenskt"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/svenskmat"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Utmärkt fisk"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/utmarktfisk"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Se mer inspiration"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/inspiration/arkiv"
                                                            }
                                                        ],
                                                        "children": [],
                                                        "title": "Inspiration"
                                                    },
                                                    {
                                                        "uid": "Smarta_verktyg",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Listsök"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/listsok"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Mina listor"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/mina-listor"
                                                            }
                                                        ],
                                                        "children": [],
                                                        "title": "Smarta verktyg"
                                                    }
                                                ],
                                                "title": "Meny"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "slotId": "MessageBoxSlot",
                        "slotUuid": "eyJpdGVtSWQiOiJNZXNzYWdlQm94U2xvdCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "position": "MessageBox",
                        "name": "MessageBoxSlot",
                        "slotShared": true,
                        "components": {
                            "component": []
                        }
                    },
                    {
                        "slotId": "cs_0000ERMZ",
                        "slotUuid": "eyJpdGVtSWQiOiJjc18wMDAwRVJNWiIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "position": "TopRightContent",
                        "name": "Default TopRightContent for Willys Promotions Page",
                        "slotShared": false,
                        "components": {
                            "component": []
                        }
                    },
                    {
                        "slotId": "FooterCenterSlot",
                        "slotUuid": "eyJpdGVtSWQiOiJGb290ZXJDZW50ZXJTbG90IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                        "position": "FooterCenter",
                        "name": "FooterCenterSlot",
                        "slotShared": true,
                        "components": {
                            "component": [
                                {
                                    "uid": "FooterComponent",
                                    "uuid": "eyJpdGVtSWQiOiJGb290ZXJDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                                    "typeCode": "AxfoodFooterComponent",
                                    "name": "Länkar sidfot",
                                    "container": "false",
                                    "socialLinks": {
                                        "instagram": {
                                            "container": "false",
                                            "uid": "instagram",
                                            "external": "false",
                                            "name": "Instagram",
                                            "synchronizationBlocked": "false",
                                            "uuid": "eyJpdGVtSWQiOiJpbnN0YWdyYW0iLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                                            "linkName": "Instagram",
                                            "url": "https://www.instagram.com",
                                            "typeCode": "CMSLinkComponent",
                                            "target": "newWindow"
                                        },
                                        "twitter": {
                                            "container": "false",
                                            "uid": "twitter",
                                            "external": "false",
                                            "name": "Twitter",
                                            "synchronizationBlocked": "false",
                                            "uuid": "eyJpdGVtSWQiOiJ0d2l0dGVyIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                                            "linkName": "Twitter",
                                            "url": "https://www.twitter.com",
                                            "typeCode": "CMSLinkComponent",
                                            "target": "newWindow"
                                        },
                                        "facebook": {
                                            "container": "false",
                                            "uid": "facebook",
                                            "external": "false",
                                            "name": "Facebook",
                                            "synchronizationBlocked": "false",
                                            "uuid": "eyJpdGVtSWQiOiJmYWNlYm9vayIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                                            "linkName": "Facebook",
                                            "url": "www.facebook.com/Willys",
                                            "typeCode": "CMSLinkComponent",
                                            "target": "newWindow"
                                        }
                                    },
                                    "coreLinks": {
                                        "my-willy-plus": {
                                            "container": "false",
                                            "uid": "my-willy-plus",
                                            "external": "false",
                                            "name": "My Willy+",
                                            "synchronizationBlocked": "false",
                                            "uuid": "eyJpdGVtSWQiOiJteS13aWxseS1wbHVzIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                                            "linkName": "Mitt konto",
                                            "url": "/#/mitt-konto",
                                            "typeCode": "CMSLinkComponent",
                                            "target": "sameWindow"
                                        }
                                    },
                                    "showLanguageCurrency": "false",
                                    "wrapAfter": "0",
                                    "synchronizationBlocked": "false",
                                    "bottomLinks": {
                                        "WillysFooterCopyrightText": {
                                            "container": "false",
                                            "uid": "WillysFooterCopyrightText",
                                            "external": "false",
                                            "name": "Willys Footer Copyright Text",
                                            "synchronizationBlocked": "false",
                                            "uuid": "eyJpdGVtSWQiOiJXaWxseXNGb290ZXJDb3B5cmlnaHRUZXh0IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                                            "linkName": "©Willys",
                                            "typeCode": "CMSLinkComponent",
                                            "target": "sameWindow"
                                        }
                                    },
                                    "navigationNode": {
                                        "uid": "WillysFooterLinksNavNode",
                                        "entries": [],
                                        "links": [],
                                        "children": [
                                            {
                                                "uid": "WillysFooterLinksLeftNode",
                                                "entries": [],
                                                "links": [],
                                                "children": [
                                                    {
                                                        "uid": "WillysAboutNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Om oss"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/om-oss"
                                                            }
                                                        ],
                                                        "children": [
                                                            {
                                                                "uid": "WillysVarHistoriaPageNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Vår historia"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/var-historia"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Vår historia"
                                                            },
                                                            {
                                                                "uid": "WillysVarAffarsidePageNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Vår affärsidé"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/var-affarside"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Vår affärsidé"
                                                            },
                                                            {
                                                                "uid": "WillysAllaRattTillBraMatPageNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Allas rätt till bra mat"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/allas-ratt-till-bra-mat"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Bra mat för alla"
                                                            },
                                                            {
                                                                "uid": "WillysSustainabilityNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Hållbarhet"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/hallbarhet"
                                                                    }
                                                                ],
                                                                "children": [
                                                                    {
                                                                        "uid": "WillysGreenRedNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Resurseffektiva butiker"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/hallbarhet/grona-butiker-roda-priser"
                                                                            }
                                                                        ],
                                                                        "children": [
                                                                            {
                                                                                "uid": "Vår klimatpåverkan",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Vår klimatpåverkan"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/var-klimatpaverkan"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Vår klimatpåverkan"
                                                                            }
                                                                        ],
                                                                        "title": "Resurseffektiva butiker"
                                                                    },
                                                                    {
                                                                        "uid": "WillysGoodEnvironmentalNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Bra miljöval"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/hallbarhet/bra-miljoval"
                                                                            }
                                                                        ],
                                                                        "children": [
                                                                            {
                                                                                "uid": "WillysPVCNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "PVC"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/bra-miljoval/pvc"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "PVC"
                                                                            },
                                                                            {
                                                                                "uid": "WillysEcoLabeledToysNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Miljömärkta leksaker"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/bra-miljoval/miljomarkta-leksaker"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Miljömärkta leksaker"
                                                                            }
                                                                        ],
                                                                        "title": "Bra miljöval"
                                                                    },
                                                                    {
                                                                        "uid": "WillysAnsvarsfulltSortimentPageNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Ansvarsfullt sortiment"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/hallbarhet/ansvarsfullt-sortiment"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Ansvarsfullt sortiment"
                                                                    },
                                                                    {
                                                                        "uid": "WillysWasteSmartNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Svinnsmart"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/hallbarhet/svinnsmart"
                                                                            }
                                                                        ],
                                                                        "children": [
                                                                            {
                                                                                "uid": "WillysOurGoalNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Vår målsättning"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/var-malsattning"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Vår målsättning"
                                                                            },
                                                                            {
                                                                                "uid": "WillysBecomeWasteSmartNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Bli svinnsmart"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/bli-svinnsmart"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Bli svinnsmart"
                                                                            },
                                                                            {
                                                                                "uid": "WillysWasteSmartCooperationNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Svinnsmarta samarbeten"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/svinnsmarta-samarbeten"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Svinnsmarta samarbeten"
                                                                            },
                                                                            {
                                                                                "uid": "WillysReduceWasteNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Så minskar vi matsvinnet"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/sa-minskar-vi-matsvinnet"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Så minskar vi matsvinnet"
                                                                            },
                                                                            {
                                                                                "uid": "WillysDenHarMatenSlangsMestNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Den här maten slängs mest"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/undersokning"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Den här maten slängs mest"
                                                                            },
                                                                            {
                                                                                "uid": "WillysFoodCommissionNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Matmissionen"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/matmissionen"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Matmissionen"
                                                                            },
                                                                            {
                                                                                "uid": "WillysVaraSvinnsmartaProdukterNode",
                                                                                "entries": [],
                                                                                "links": [
                                                                                    {
                                                                                        "external": false,
                                                                                        "linkName": [
                                                                                            {
                                                                                                "key": "sv",
                                                                                                "value": "Våra svinnsmarta produkter"
                                                                                            }
                                                                                        ],
                                                                                        "target": false,
                                                                                        "url": "/artikel/om-oss/hallbarhet/svinnsmart/varor"
                                                                                    }
                                                                                ],
                                                                                "children": [],
                                                                                "title": "Våra svinnsmarta produkter"
                                                                            }
                                                                        ],
                                                                        "title": "Svinnsmart"
                                                                    },
                                                                    {
                                                                        "uid": "WillysSaveTheChildrenNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Rädda Barnen"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/hallbarhet/samhallsengagemang"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Samhällsengagemang"
                                                                    }
                                                                ],
                                                                "title": "Hållbarhet"
                                                            },
                                                            {
                                                                "uid": "WillysNewsNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Nyheter & press"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/nyheter-och-press"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Nyheter & press"
                                                            },
                                                            {
                                                                "uid": "WillysWillysPlusNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Willys Plus"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/om-oss/willys-plus"
                                                                    }
                                                                ],
                                                                "children": [
                                                                    {
                                                                        "uid": "WillysBetterDealNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "En ännu bättre affär"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/willys-plus/en-annu-battre-affar"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "En ännu bättre affär"
                                                                    },
                                                                    {
                                                                        "uid": "WillysWillysPlusPaFleraSprakNode",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Willys plus på flera språk"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/willys-plus/willys-plus-pa-flera-sprak"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Willys Plus på flera språk"
                                                                    },
                                                                    {
                                                                        "uid": "WillysUtanPersonnummer",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Ansluta utan personnnummer"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/om-oss/willys-plus/utan-personnummer"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Ansluta utan personnummer"
                                                                    }
                                                                ],
                                                                "title": "Willys Plus"
                                                            },
                                                            {
                                                                "uid": "Willys Dataskydd Node",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Dataskydd"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/villkor-dataskydd"
                                                                    }
                                                                ],
                                                                "children": [
                                                                    {
                                                                        "uid": "Node Integritetspolicy",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Integritetspolicy"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/artikel/integritetspolicy"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Integritetspolicy"
                                                                    }
                                                                ],
                                                                "title": "Dataskydd"
                                                            },
                                                            {
                                                                "uid": "CookieSettings",
                                                                "entries": [],
                                                                "links": [],
                                                                "children": [],
                                                                "title": "Cookie-inställningar"
                                                            }
                                                        ],
                                                        "title": "Om oss"
                                                    },
                                                    {
                                                        "uid": "WillysCustomerServiceNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Kundservice"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/artikel/kundservice"
                                                            }
                                                        ],
                                                        "children": [
                                                            {
                                                                "uid": "WillysContactNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Kontakta oss"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/kontakta-oss"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Kontakta oss"
                                                            },
                                                            {
                                                                "uid": "WillysFAQNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Vanliga frågor & svar"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/vanliga-fragor-och-svar"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Vanliga frågor & svar"
                                                            },
                                                            {
                                                                "uid": "WillysWarrantyNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Våra garantier"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/vara-garantier"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Våra garantier"
                                                            },
                                                            {
                                                                "uid": "WillysEhandelNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Vår e-handel"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/ehandla"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Vår e-handel"
                                                            },
                                                            {
                                                                "uid": "Willys_E-handel_foretag",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "E-handel företag"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/foretag"
                                                                    }
                                                                ],
                                                                "children": [
                                                                    {
                                                                        "uid": "Företagstider",
                                                                        "entries": [],
                                                                        "links": [
                                                                            {
                                                                                "external": false,
                                                                                "linkName": [
                                                                                    {
                                                                                        "key": "sv",
                                                                                        "value": "Här kan du e-handla som företag"
                                                                                    }
                                                                                ],
                                                                                "target": false,
                                                                                "url": "/foretagstider"
                                                                            }
                                                                        ],
                                                                        "children": [],
                                                                        "title": "Här kan du e-handla som företag"
                                                                    }
                                                                ],
                                                                "title": "E-handel företag"
                                                            },
                                                            {
                                                                "uid": "WillysECommerceTermsNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Villkor e-handel"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/villkor-e-handel"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Villkor e-handel"
                                                            },
                                                            {
                                                                "uid": "WillysWillysPlusTerms2Node",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Villkor Willys Plus"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/villkor-for-willys-plus"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Villkor Willys Plus"
                                                            },
                                                            {
                                                                "uid": "Footer_willysappvillkor",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Villkor Willys app"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/kundservice/villkor-for-willys-app"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Villkor Willys app"
                                                            },
                                                            {
                                                                "uid": "Tillganglighet",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Tillgänglighetsredogörelse"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/tillganglighet"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Tillgänglighetsredogörelse"
                                                            }
                                                        ],
                                                        "title": "Kundservice"
                                                    },
                                                    {
                                                        "uid": "WillysWorkNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": true,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Jobba hos oss"
                                                                    }
                                                                ],
                                                                "target": true,
                                                                "url": "/artikel/jobbahososs"
                                                            }
                                                        ],
                                                        "children": [
                                                            {
                                                                "uid": "WillysLedigaTjansterWorkNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": true,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Lediga tjänster"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "https://jobb.axfood.se/willys/go/Willys/3661901/?locale=sv_SE"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Lediga tjänster"
                                                            },
                                                            {
                                                                "uid": "WillysUtvecklashosossWorkNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Utvecklas hos oss"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/utvecklashososs"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Utvecklas hos oss"
                                                            },
                                                            {
                                                                "uid": "WillysJobbapaWillysWorkNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Jobba på Willys"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/jobbapawillys"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Jobba på Willys"
                                                            },
                                                            {
                                                                "uid": "WillysVararollerWorkNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Våra roller"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "/artikel/vararoller"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Våra roller"
                                                            },
                                                            {
                                                                "uid": "WillysFAQWorkNode",
                                                                "entries": [],
                                                                "links": [
                                                                    {
                                                                        "external": false,
                                                                        "linkName": [
                                                                            {
                                                                                "key": "sv",
                                                                                "value": "Frågor & svar om våra jobb"
                                                                            }
                                                                        ],
                                                                        "target": false,
                                                                        "url": "https://willys.imbox.help/category/7876/jobba-pa-willys"
                                                                    }
                                                                ],
                                                                "children": [],
                                                                "title": "Frågor & svar om våra jobb"
                                                            }
                                                        ],
                                                        "title": "Jobba hos oss"
                                                    }
                                                ]
                                            },
                                            {
                                                "uid": "WillysFooterLinksRightNode",
                                                "entries": [],
                                                "links": [],
                                                "children": [
                                                    {
                                                        "uid": "WillysFooterCampaignNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Erbjudanden"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/erbjudanden"
                                                            }
                                                        ],
                                                        "children": [],
                                                        "title": "Erbjudanden"
                                                    },
                                                    {
                                                        "uid": "WillysFooterStoreFinderNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Hitta butik"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/butik-sok"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Hitta butik"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "/butik-sok"
                                                            },
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Bli Willys Plus-kund"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "https://www.willys.se/registrera/privat/identifiera"
                                                            }
                                                        ],
                                                        "children": [],
                                                        "title": "Hitta butik"
                                                    },
                                                    {
                                                        "uid": "WillysFooterWillysPlusNode",
                                                        "entries": [],
                                                        "links": [
                                                            {
                                                                "external": false,
                                                                "linkName": [
                                                                    {
                                                                        "key": "sv",
                                                                        "value": "Bli Willys Plus-kund"
                                                                    }
                                                                ],
                                                                "target": false,
                                                                "url": "https://www.willys.se/registrera/privat/identifiera"
                                                            }
                                                        ],
                                                        "children": [],
                                                        "title": "Bli Willys Plus-kund"
                                                    }
                                                ],
                                                "title": "Willys Footer Right Navigation Node"
                                            }
                                        ],
                                        "title": "Willys Footer Navigation Node"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "slotId": "MainContentSlot-WillysPromotionPage",
                        "slotUuid": "eyJpdGVtSWQiOiJNYWluQ29udGVudFNsb3QtV2lsbHlzUHJvbW90aW9uUGFnZSIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "position": "MainContent",
                        "name": "MainContent",
                        "slotShared": false,
                        "components": {
                            "component": [
                                {
                                    "uid": "willysPromotionsCMSComponent",
                                    "uuid": "eyJpdGVtSWQiOiJ3aWxseXNQcm9tb3Rpb25zQ01TQ29tcG9uZW50IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                                    "typeCode": "AxfoodPromotionsCMSComponent",
                                    "name": "Willys Promotions CMS Component",
                                    "container": "false",
                                    "dontUseInfiniteScroll": "false",
                                    "synchronizationBlocked": "false",
                                    "smartSuggestionContainer": {
                                        "container": "true",
                                        "uid": "willysPromoSmartSuggestionsComponent",
                                        "components": "[\"Värmande soppa 2017_47_1\",\"Laxburgare 2017_47_2\",\"Falustroganoff 2017_47_3\",\"Värmande soppa WH 2017_47_1\",\"Falustroganoff WH 2017_47_3\",\"Adventsfika 2017_48_1\",\"Skinksmörgås 2017_48_2\",\"Fredagsfest 2017_48_3\",\"Adventsfika WH 2017_48_1\",\"Skinksmörgås WH 2017_48_2\",\"Vardagspasta 2017_49_1\",\"Kycklingwok 2017_49_2\",\"Bulgursallad 2017_49_3\",\"Vardagspasta WH 2017_49_1\",\"Bulgursallad WH 2017_49_3\",\"Julmacka 2017_50_1\",\"Julfavoriter 2017_50_2\",\"Kycklingburgare 2017_50_3\",\"Julmacka WH 2017_50_1\",\"Kycklingburgare WH 2017_50_3\",\"Köttbullar 2017_51_1\",\"Skinkmacka 2017_51_2\",\"Laxpasta 2017_51_3\",\"Köttbullar WH 2017_51_1\",\"Skinksmörgås WH 2017_51_2\",\"Sparristoast 2017_52_2\",\"Oxfilé 2017_52_3\",\"Oreo-cheesecake 2017_52_1\",\"Oxfilé WH 2017_52_3\",\"Oreo-cheesecake WH 2017_52_1\"]",
                                        "name": "Willys Promo Smart Suggestions Component",
                                        "synchronizationBlocked": "false",
                                        "uuid": "eyJpdGVtSWQiOiJ3aWxseXNQcm9tb1NtYXJ0U3VnZ2VzdGlvbnNDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                                        "headline": "Smarta förslag",
                                        "typeCode": "AxfoodSmartSuggestionsContainerComponent"
                                    },
                                    "columnContainerData": {
                                        "uuid": "eyJpdGVtSWQiOiJ3aWxseXNQcm9tb1NtYXJ0U3VnZ2VzdGlvbnNDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                                        "typeCode": "AxfoodSmartSuggestionsContainerComponent",
                                        "name": "Willys Promo Smart Suggestions Component",
                                        "container": "true",
                                        "components": "[\"Värmande soppa 2017_47_1\",\"Laxburgare 2017_47_2\",\"Falustroganoff 2017_47_3\",\"Värmande soppa WH 2017_47_1\",\"Falustroganoff WH 2017_47_3\",\"Adventsfika 2017_48_1\",\"Skinksmörgås 2017_48_2\",\"Fredagsfest 2017_48_3\",\"Adventsfika WH 2017_48_1\",\"Skinksmörgås WH 2017_48_2\",\"Vardagspasta 2017_49_1\",\"Kycklingwok 2017_49_2\",\"Bulgursallad 2017_49_3\",\"Vardagspasta WH 2017_49_1\",\"Bulgursallad WH 2017_49_3\",\"Julmacka 2017_50_1\",\"Julfavoriter 2017_50_2\",\"Kycklingburgare 2017_50_3\",\"Julmacka WH 2017_50_1\",\"Kycklingburgare WH 2017_50_3\",\"Köttbullar 2017_51_1\",\"Skinkmacka 2017_51_2\",\"Laxpasta 2017_51_3\",\"Köttbullar WH 2017_51_1\",\"Skinksmörgås WH 2017_51_2\",\"Sparristoast 2017_52_2\",\"Oxfilé 2017_52_3\",\"Oreo-cheesecake 2017_52_1\",\"Oxfilé WH 2017_52_3\",\"Oreo-cheesecake WH 2017_52_1\"]",
                                        "synchronizationBlocked": "false",
                                        "headline": "Smarta förslag"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "label": "WillysPromotionPage",
        "__lang": "sv",
        "__namespaces": {
            "common": {
                "navigation": {
                    "createAccount": "Skapa konto",
                    "myPages": "Mina sidor",
                    "myAccount": "Mitt konto",
                    "myOrders": "Mina köp",
                    "myLists": "Mina listor",
                    "logOut": "Logga ut",
                    "logIn": "Logga in",
                    "skipToMainContent": "Hoppa till huvudinnehåll",
                    "skipProductBeam": "Hoppa över produktlistan"
                },
                "aria": {
                    "loggedInAs": "Inloggad som {{username}}",
                    "loggedIn": "Inloggad",
                    "carouselNext": "Nästa",
                    "carouselPrevious": "Föregående",
                    "infoIcon": "Mer information"
                },
                "currency": {
                    "kr": "kr"
                },
                "interaction": {
                    "clearInput": "Rensa fält",
                    "showPassword": "Visa lösenord",
                    "hidePassword": "Dölj lösenord"
                },
                "units": {
                    "kilogram": "kg",
                    "pieces": "st",
                    "percentage": "%"
                },
                "usps": {
                    "news": "nyhet!"
                },
                "carousel": {
                    "nextSlide": "Nästa",
                    "prevSlide": "Föregående"
                },
                "button": {
                    "ok": "OK",
                    "cancel": "Avbryt",
                    "tryAgain": "Försök igen",
                    "submitting": "Laddar",
                    "choose": "Välj"
                },
                "input": {
                    "invalidRequired": "Obligatoriskt fält",
                    "invalidEmail": "Ogiltig e-postadress",
                    "invalidPattern": "Ogiltigt format",
                    "invalidMinLength": "Måste vara minst {{minLength}} tecken.",
                    "invalidMaxLength": "Får vara max {{maxLength}} tecken."
                },
                "back": "Tillbaka",
                "from": "Från",
                "to": "Till",
                "store.openMessage.notOpen": "Ny butik - öppnar inom kort",
                "store.openMessage.soon": "Ny butik - öppnar ",
                "store.openMessage.open": "Öppet idag: ",
                "store": {
                    "openMessage": {
                        "notOpen": "Ny butik - öppnar inom kort",
                        "open": "Öppet idag: ",
                        "soon": "Ny butik - öppnar "
                    }
                },
                "backButtonLabel": "Gå tillbaka",
                "openFaqLabel": "Öppna frågor och svar",
                "closeFaqLabel": "Stäng",
                "loginLabel": "Logga in",
                "closeTooltipLabel": "Stäng tooltip",
                "closeModal": "Stäng",
                "closeSnackbar": "Stäng",
                "openProductDetailLabel": "Visa produktinformation",
                "showInfoLabel": "Visa information",
                "showProductListLabel": "Visa fler produkter",
                "minimizeLabel": "Minimera",
                "expandLabel": "Expandera",
                "heroBannerABTestButtonText": "Klicka för inspiration",
                "survey": {
                    "buttonText": "Tyck till",
                    "buttonAriaLabel": "Öppna kundundersökning"
                },
                "listbox": {
                    "ariaLabelSort": "Sortera"
                },
                "close": "Stäng"
            },
            "metadata": {
                "metadata": {
                    "title": "Handla bra mat billigt online",
                    "titleSuffix": "| Willys",
                    "description": "Hos oss kan du enkelt och billigt handla mat online. Vi har ett brett sortiment av mat och dryck och självklart ett stort ekologiskt utbud. Vår affärsidé: Sveriges billigaste matkasse!"
                },
                "pdp": {
                    "meta": {
                        "title": "{{name}} {{volume}} | Willys",
                        "titleWithManufacturer": "{{name}} {{volume}} från {{manufacturer}} | Willys",
                        "description": "Handla {{name}} {{volume}} billigt online. Vår affärside: Sveriges billigaste matkasse."
                    }
                }
            },
            "footer": {
                "accessibility": {
                    "pharmaceuticalVerificationLabel": "Klicka här för att kontrollera att denna webbplats får sälja läkemedel.",
                    "goodEnvironment": "Klicka här för att läsa om bra miljöval."
                }
            },
            "search": {
                "search": {
                    "field": {
                        "placeholder": "Sök i e-handeln",
                        "mobile": {
                            "placeholder": "Sök..."
                        }
                    },
                    "multi": {
                        "search": "Sök",
                        "title": "Multisök",
                        "result": {
                            "count": "{{count}} varor"
                        },
                        "tooltip": {
                            "messages": {
                                "maxFieldLimit": "Du har nått max antal varor för ett multisök."
                            }
                        }
                    }
                },
                "asYouType": {
                    "searchTermHeading": "Du sökte på \"{{searchTerm}}\"",
                    "usedQueryHeading": "Visar resultat för \"{{usedQuery}}\"",
                    "multipleResultsText": "Visar {{count}} av {{total}} varor",
                    "singleResultText": "Visar {{count}} av {{total}} vara",
                    "showAllLinkText": "Se alla",
                    "gotoAllProductsLinkText": "Gå till alla varor",
                    "noResultsText": "Din sökning gav tyvärr ingen träff. Kontrollera stavning eller använd ett mindre specifikt sökord.",
                    "suggestionsHeading": "Produktkategorier"
                }
            },
            "menubutton": {
                "menubutton": {
                    "menu": "Meny",
                    "a11y": "Öppna meny",
                    "headerMenuTooltip": "Nu hittar du till våra erbjudanden via den här menyn."
                }
            },
            "sidenav": {
                "sidenav": {
                    "header": {
                        "menu": "Meny",
                        "categories": "Sortiment"
                    },
                    "label": "Navigering meny: Sidomeny",
                    "closeButtonLabel": "Stäng"
                }
            },
            "error": {
                "404": {
                    "head": "Sidan kunde inte hittas | Willys",
                    "errorTextLink": "startsidan",
                    "title": "Oj då! Vi kan tyvärr inte hitta sidan.",
                    "errorTextEnd": "istället.",
                    "errorTextStart": "Du kanske skrev fel adress eller så har vi tagit bort sidan. Prova att gå till"
                },
                "410": {
                    "head": "Sidan finns inte längre | Willys",
                    "errorTextLink": "Mina köp",
                    "title": "Sidan du söker finns inte längre.",
                    "errorTextEnd": "eller i plockmailet som skickats till din e-post.",
                    "errorTextStart": "Du kan hitta all information om din order under"
                },
                "500": {
                    "head": "Ett fel uppstod | Willys",
                    "errorTextLink": "Ladda om",
                    "title": "Oj då! Vi verkar ha ett tekniskt problem.",
                    "errorTextEnd": "sidan eller kom tillbaka senare"
                },
                "default": {
                    "404": {
                        "head": "Sidan kunde inte hittas | Willys",
                        "title": "Oj då! Vi kan tyvärr inte hitta sidan.",
                        "errorTextStart": "Du kanske skrev fel adress eller så har vi tagit bort sidan. Prova att gå till",
                        "errorTextLink": "startsidan",
                        "errorTextEnd": "istället."
                    },
                    "410": {
                        "head": "Sidan finns inte längre | Willys",
                        "title": "Sidan du söker finns inte längre.",
                        "errorTextStart": "Du kan hitta all information om din order under",
                        "errorTextLink": "Mina köp",
                        "errorTextEnd": "eller i plockmailet som skickats till din e-post."
                    },
                    "500": {
                        "head": "Ett fel uppstod | Willys",
                        "title": "Oj då! Vi verkar ha ett tekniskt problem.",
                        "errorTextLink": "Ladda om",
                        "errorTextEnd": "sidan eller kom tillbaka senare"
                    },
                    "default": {
                        "head": "Ett fel uppstod | Willys",
                        "title": "Oj då! Vi verkar ha ett tekniskt problem.",
                        "errorTextLink": "Ladda om",
                        "errorTextEnd": "sidan eller kom tillbaka senare"
                    },
                    "head": "Ett fel uppstod | Willys",
                    "errorTextLink": "Ladda om",
                    "title": "Oj då! Vi verkar ha ett tekniskt problem.",
                    "errorTextEnd": "sidan eller kom tillbaka senare"
                },
                "app": {
                    "default": {
                        "head": "Ett fel uppstod | Willys",
                        "title": "Oj då! Vi kan tyvärr inte visa sidan.",
                        "errorTextStart": "Ett oförutsett fel inträffade vid hämtning av sidan. Prova gärna att starta om appen eller att logga in på nytt."
                    }
                },
                "/mina-kop": {
                    "401": {
                        "head": "Vi kan tyvärr inte visa sidan | Willys",
                        "title": "Oj då! Vi kan tyvärr inte visa sidan.",
                        "errorTextStart": "Ordern kan inte visas då den inte är beställd från det här kontot. Gå till ",
                        "errorTextLink": "startsidan",
                        "errorTextEnd": "istället."
                    },
                    "404": {
                        "head": "Vi kan tyvärr inte visa sidan | Willys",
                        "title": "Oj då! Vi kan tyvärr inte visa sidan.",
                        "errorTextStart": "Ordern kan inte visas då den inte är beställd från det här kontot. Gå till ",
                        "errorTextLink": "startsidan",
                        "errorTextEnd": "istället."
                    },
                    "default": {
                        "head": "Ett fel uppstod | Willys",
                        "errorTextLink": "Ladda om",
                        "title": "Oj då! Vi verkar ha ett tekniskt problem.",
                        "errorTextEnd": "sidan eller kom tillbaka senare"
                    }
                }
            },
            "login": {
                "login": {
                    "loginPrompt": "Som inloggad får du en bättre och mer personligt anpassad upplevelse",
                    "heading": "Logga in",
                    "headingB2B": "Logga in som företag",
                    "loginConfirmSubtitle": "Vänligen bekräfta ditt lösenord för att fortsätta",
                    "tabs": {
                        "private": "Privat",
                        "company": "Företag"
                    },
                    "methodTabs": {
                        "b2cPassword": "Lösenord",
                        "bankId": "Mobilt BankID"
                    },
                    "bankId": {
                        "startBankIdSameDeviceText": "Starta BankID-appen",
                        "bankIdOnOtherDeviceText": "Mobilt BankID på annan enhet",
                        "startDesktopFlowButtonText": "Logga in med mobilt BankID",
                        "startMobileAppQr": "Starta BankID-appen och välj alternativet för QR-kod. Scanna sedan koden nedan.",
                        "timeLeft": "{{ seconds }} sekunder kvar",
                        "clearIntervals": "Förläng tid",
                        "cancel": "Avbryt",
                        "retry": "Försök igen",
                        "return": "Tillbaka",
                        "loggingIn": "Loggar in",
                        "noCustomerFound": {
                            "heading": "Inget konto hittades",
                            "body": "Du har inte ett konto hos oss. Vill du skapa ett konto?",
                            "bodyUnder18": "Du måste vara 18 år för att ha ett Willys Plus-konto.",
                            "createAccountBtn": "Skapa konto",
                            "okBtn": "OK",
                            "cancelBtn": "Avbryt"
                        },
                        "qrCode": "QR-kod",
                        "leaveFullscreen": "Lämna helskärmsläge"
                    },
                    "fromMessage": {
                        "MY_LISTS": "Logga in för att spara produkten i en inköpslista.",
                        "MY_COMMON_ITEMS": "Logga in för att se dina vanligaste inköp",
                        "CART": "För att spara varukorgen som en inköpslista behöver du logga in.",
                        "MY_ACCOUNT": "För att se dina kontouppgifter behöver du logga in.",
                        "CREATE_ACCOUNT": "Du har redan ett konto hos oss.",
                        "ACCOUNT_ORDERS": "För att se dina köp behöver du logga in."
                    },
                    "inputs": {
                        "ssn": {
                            "placeholder": "Personnummer / Willys Plus-nummer",
                            "tooltip": "Ange personnummer (ååååmmddxxxx) eller Willys Plus-nummer på 16 siffror."
                        },
                        "company": {
                            "placeholder": "Kundnummer",
                            "tooltip": "Ditt kundnummer består av sex siffror."
                        },
                        "password": {
                            "placeholder": "Lösenord"
                        }
                    },
                    "rememberMe": "Håll mig inloggad",
                    "links": {
                        "resetPassword": "Återställ lösenord",
                        "createAccount": "Skapa konto",
                        "continueAsGuest": "Fortsätt handla som gäst",
                        "b2cLogin": "Logga in som privatkund",
                        "b2bLogin": "Logga in som företag"
                    },
                    "or": " eller ",
                    "error": {
                        "b2c": "Ange personnummer (ååååmmddxxxx) eller Willys Plus-nummer på 16 siffror. Företagskund? <0>Logga in här.</0>",
                        "b2b": "Fel format. Vänligen ange ditt kundnummer i formen xxxxxx"
                    },
                    "submit": "Logga in",
                    "loginErrorMessage": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                    "b2c": {
                        "ssn": {
                            "loginErrorMessage": {
                                "badcredentials": "Fel användarnamn eller lösenord. Vänligen försök igen."
                            }
                        }
                    },
                    "b2b": {
                        "loginErrorMessage": {
                            "bruteforcewarning": "För många försök. Vänligen vänta innan du försöker igen.",
                            "badcredentials": "Fel användarnamn eller lösenord. Vänligen försök igen."
                        }
                    },
                    "B2BLoginConfirmDesc": "Vänligen bekräfta ditt lösenord för att fortsätta"
                },
                "login.loginErrorMessage": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                "login.loginErrorMessage.badcredentials": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                "login.loginErrorMessage.bruteforcewarning": "För många försök. Vänligen vänta innan du försöker igen.",
                "login.loginErrorMessage.badcredentials.general": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                "login.b2b.loginErrorMessage.badcredentials": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                "login.b2b.loginErrorMessage.bruteforcewarning": "För många försök. Vänligen vänta innan du försöker igen.",
                "login.loginErrorMessage.badcredentials.mcn": "Fel Willys plus-nummer eller lösenord. Vänligen försök igen.",
                "login.loginErrorMessage.error": "Det går tyvärr inte att logga in just nu. Försök igen lite senare.",
                "login.loginErrorMessage.legalage": "Du måste ha fyllt 18 år för att handla.",
                "form.invalid.personal.number": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                "login.b2c.ssn.loginErrorMessage.badcredentials": "Fel användarnamn eller lösenord. Vänligen försök igen.",
                "form": {
                    "invalid": {
                        "personal": {
                            "number": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx"
                        }
                    }
                }
            },
            "tooltip": {
                "tooltip": {
                    "loyalty": {
                        "product": {
                            "applied": "Varan har Willys Plus-pris."
                        },
                        "login": {
                            "toSave": " för att ta del av erbjudandet."
                        }
                    },
                    "originCountry": "För livsmedel avses det land där produkten senast är processad och/eller förpackad.",
                    "nicotineMedicalProduct": "Nikotinläkemedel får inte säljas vid misstanke om langning till någon som inte har fyllt 18 år.",
                    "tobaccoProduct": "18 års åldersgräns. Legitimation krävs vid utlämning.",
                    "removedVoucher": "Handla för minst {{minimumPurchaseAmount}} kr så kan du lägga till din värdecheck igen.",
                    "aboutThisHits": "Resultaten är sorterade enligt relevans. Som inloggad baseras relevansen i första hand på individuell köphistorik och övrig aktivitet på willys.se som t.ex. tillägg av artiklar i varukorg eller en inköpslista. I andra hand baseras relevansen på aktiviteter från samtliga besökare. För oinloggade kunder baseras relevansen enbart på aktiviteter från samtliga besökare. <0>Läs mer</0>",
                    "aboutThisSearchResult": "Om dessa resultat"
                }
            },
            "productCard": {
                "quantityInput": {
                    "description": "Ändra produktantal",
                    "increase": "Öka antal",
                    "decrease": "Minska antal",
                    "ok": "OK",
                    "outOfStock": "Tillfälligt slut",
                    "bargainOutOfStock": "Slut i lager",
                    "incrementDisabledDueToLowStock": "Du kan inte lägga till fler av denna produkt eftersom varan är slut i lager",
                    "error": {
                        "message": "Varuantal ändrades inte"
                    },
                    "buyButtonText": "Köp"
                }
            },
            "product": {
                "product": {
                    "tooltipPersonalText": "Personliga erbjudanden innebär att priset på en vara har personanpassats på teknisk väg (automatiserat beslutsfattande) baserat på information vi har om dig som kund. <0>Läs mer.</0>",
                    "price": {
                        "default": "Ordinarie pris",
                        "compare": "Jmf-pris",
                        "compare-missing": "Jmf-pris saknas",
                        "deposit": "+Pant",
                        "lowestHistorical": "Lägsta 30-dgrspris {{price}}",
                        "offlinePromotionLowestHistoricalPrice": "Lägsta 30-dgrspris {{price}}"
                    },
                    "tabs": {
                        "product_information": "Produktinformation",
                        "table_of_contents": "Innehållsförteckning",
                        "other": "Övrigt"
                    },
                    "mixmatch": {
                        "label": "Välj & Blanda"
                    },
                    "news": {
                        "label": "Nyhet!"
                    },
                    "segmented": {
                        "label": "Personligt"
                    },
                    "medical": {
                        "label": "Läkemedel"
                    },
                    "age_18": {
                        "label": "18-årsgräns"
                    },
                    "bargain": {
                        "label": "Tillfälligt parti"
                    },
                    "ecological": {
                        "label": "Ekologisk"
                    },
                    "restriction": {
                        "age": "18-års åldersgräns",
                        "age_title": "Här finns varor med åldersgräns"
                    },
                    "label": {
                        "age_restricted_15": "Åldersgräns 15 år",
                        "age_restricted_18": "Åldersgräns 18 år",
                        "allergy_approved": "Allergi-godkänd",
                        "asc_fish": "ASC-märkt",
                        "crossed_ax": "Glutenfri",
                        "ecological": "Ekologiskt",
                        "energy_label": "Produktblad",
                        "environmental_choice": "Miljömärkt",
                        "eu_ecological": "EU-ekologiskt",
                        "eu_flower": "EU-blomman",
                        "fairtrade": "Fairtrade",
                        "fairtrade_cacao": "Fairtrade kakao",
                        "freeTextSuggestion": "FRITEXT",
                        "from_sweden": "Från Sverige",
                        "frozen": "Djupfryst",
                        "glutenfree": "Glutenfri",
                        "gots": "Global Organic Textile Standard",
                        "keyhole": "Nyckelhålsmärkt",
                        "krav": "KRAV-märkt",
                        "laktosfree": "Laktosfri",
                        "meat_from_sweden": "Kött från Sverige",
                        "medicine-label": "Läkemedel",
                        "milk_from_sweden": "Mjölk från Sverige",
                        "msc_fish": "MSC-märkt",
                        "nicotine_medical": "Läkemedel",
                        "ocs_100": "OCS 100",
                        "rainforest_alliance": "Rainforest Alliance",
                        "soil_association_organic": "Soil Association Organic",
                        "swan": "Svanen-märkt",
                        "swedish_bird": "Svensk fågel",
                        "swedish_flag": "Svensk flagga",
                        "swedish_meat": "Svenskt kött",
                        "environmental_facet": "Bra Miljöval",
                        "medicine-nicotine-label": "Nikotinläkemedel får inte säljas vid misstanke om langning till någon som inte fyllt 18 år.",
                        "fairtrade_facet": "Fairtrade"
                    },
                    "promotion": {
                        "limitHousehold": "{{redeemLimitLabel}} per hushåll",
                        "used": "NYTTJAT \nERBJUDANDE",
                        "timesUsed": "Du har nyttjat {{timesUsed}} av {{redeemLimit}}",
                        "validUntil": "Gäller t.o.m",
                        "saveKr": "Spara {{amount}} kr"
                    },
                    "contents": "Innehåll",
                    "nutrition": {
                        "title": "Näringsvärden",
                        "quantity": "mängd",
                        "driPercentage": "% av DRI",
                        "description": "Näringsvärden per {{amount}}",
                        "portion": "per {{portion}}"
                    },
                    "gtin": "gtin",
                    "extraInfoCode": "Kan variera i färg, form eller mönster.",
                    "medicineType": "Typ av läkemedel",
                    "medicineLeafletStart": "Läs",
                    "medicineLeafletLink": "bipacksedeln",
                    "medicineLeafletEnd": "innan du börjar använda detta läkemedel",
                    "activeSubstance": "Aktiv substans",
                    "forEachUnitOfMeasurement": "per",
                    "otherCountries": "Möjliga länder vid ersättning",
                    "otherCountriesInfo": "I varukorgen kan du tacka nej till ersättningsvaror om du inte vill tillåta ersättning från dessa länder.",
                    "originCountry": "Ursprungsland",
                    "originCountries": "Ursprungsländer",
                    "countryOfOrigin": "Tillverkningsland",
                    "origin": "Ursprung",
                    "animalData": {
                        "compositionStatement": "Fodersammansättning",
                        "constituentStatement": "Analytiska beståndsdelar",
                        "additiveStatement": "Fodertillsatser"
                    },
                    "disclaimer": "Vi reserverar oss för att mindre förändringar av produktens närings- eller innehållsförteckning kan ha skett",
                    "dietTypeInformation": "Diettyp",
                    "consumerStorageInstructions": "Förvaring",
                    "consumerUsageInstructions": "Användarinstruktioner",
                    "preparationDescription": "Tillagningsbeskrivning",
                    "maxStorageTemprature": "Maximum förvaringstemperatur",
                    "minStorageTemprature": "Minimum förvaringstemperatur",
                    "drugIllumination": "Läkemdelsupplysningen",
                    "drugInformation": "Läkemedelsverket",
                    "energyDeclaration": {
                        "heading": "Energideklaration",
                        "linkText": "Produktblad",
                        "altText": {
                            "A": "Energieffektivitetsklass A",
                            "B": "Energieffektivitetsklass B",
                            "D": "Energieffektivitetsklass C",
                            "E": "Energieffektivitetsklass E",
                            "F": "Energieffektivitetsklass F",
                            "G": "Energieffektivitetsklass G"
                        }
                    },
                    "contact": "Kontaktuppgifter till livsmedelsföretaget",
                    "regulatoryAct": "Identifieringsmärkning",
                    "compulsoryAdditiveLabelInformation": "Övrig obligatorisk märkningsinformation",
                    "articleNumber": "Artikelnummer",
                    "precautionaryStatement": "Skyddsangivelse",
                    "danger": "Fara",
                    "not_applicable": "Ej tillämpningsbar",
                    "warning": "Varning",
                    "batteryInformation": "Batteriinformation",
                    "areBatteriesIncluded": "Ingår batterier:",
                    "areBatteriesRequired": "Krävs batterier:",
                    "batteryQuantityBuiltIn": "inbyggt",
                    "batteryTrue": "Ja",
                    "batteryFalse": "Nej",
                    "feedingInstructions": "Doseringsansvisning",
                    "animalWeight": "Vikt",
                    "animalAge": "Ålder",
                    "noImage": "Bild saknas",
                    "promotionCode": "Promotion code",
                    "not_found": {
                        "heading": "Hoppsan!",
                        "body": "Produkten du söker är inte längre tillgänglig.",
                        "cta": "Ok"
                    },
                    "countryOfOriginStatement": "Ursprung",
                    "provinceStatement": "Primär ingrediens",
                    "breadcrumb": {
                        "home": "Hem"
                    },
                    "openProductDetailLabel": "Visa produktinformation",
                    "breadcrumbPageLabel": "Navigering breadcrumbs: Produktdetalj sida",
                    "breadcrumbModalLabel": "Navigering breadcrumbs: Produktdetalj fönster",
                    "addToListLabel": "Lägg till i lista",
                    "symplifyButtonC": "Visa sorter"
                }
            },
            "slotSelector": {
                "confirmSlot": "Välj tid",
                "loading": "Hämtar tillgängliga tider",
                "externalNotice": "Nu finns det fristående hämtplatser i Stockholm",
                "showAllPickupLocations": "Visa alla hämtplatser",
                "franchiseNotice": "Vid val av den här butiken kan du ej byta leveranssätt eller butik vid ändring i din order.",
                "today": "Idag",
                "tomorrow": "Imorgon",
                "expressDelivery": "Expressavgift",
                "earlySlot": "Beställ senast 12:00",
                "isFetchingSlotsMessage": "Hämtar tillgängliga tider",
                "express": "Express",
                "changeOrder": "Ordern kan ändras t.o.m {{closeTimeFormatted}}"
            },
            "timeSlotDetails": {
                "pickingFee": "Plockavgift",
                "deliveryFee": "Leveransavgift",
                "deliveryFeeShort": "Leverans",
                "expressFee": "Expressavgift",
                "expressFeeShort": "Express",
                "externalFee": "Hämtavgift",
                "externalFeeShort": "Hämta",
                "total": "Totalt",
                "currency": "kr",
                "completeOrderBefore": "Lagd order kan ändras tom {{time}}",
                "completeOrderBeforeExpress": "Lagd order kan ändras tom {{time}}",
                "slotExpireTime": "Din tid släpps om du inte ändrar i din order inom 30 min."
            },
            "timeSlots": {
                "noAvailableTimes": "Inga tillgängliga tider",
                "completeOrderBefore": "Lagd order kan ändras tom {{time}}"
            },
            "cartConflictModal": {
                "replace": "Ersätt",
                "dontReplace": "Ersätt inte",
                "replaceWith": "Ersätt med",
                "outOfStock": "Tillfälligt slut",
                "productNotInStock": "Varor ej i lager",
                "products": "{{amount}} st varor",
                "singleProduct": "En vara",
                "productsNotAvailable": "Varor ej tillgängliga",
                "replacementItemsCouldNotBeFound": "Dessa varor kan inte ersättas och kommer därför att tas bort från din varukorg.",
                "continue": "Fortsätt",
                "cancel": "Avbryt",
                "sizeVariation": "Storlek och antal kan variera"
            },
            "conflictListItem": {
                "replacementVolumeVaries": "Ersättningsmängd kan variera",
                "depositPrice": "+pant",
                "partiallyOutOfStock": "{{amountToReplace}} av {{totalAmount}} ersätts",
                "amountOutOfStock": "{{amount}}{{unit}}",
                "partiallyRemoveItems": "{{amountToReplace}} {{unit}} av {{totalAmount}} tas bort"
            },
            "openOrderNotice": {
                "text": "Din order ändras. Avsluta köpet senast {{day}} kl {{time}} för att ändringarna ska gälla.",
                "link": "Avbryt ändring",
                "modal": {
                    "title": "Vill du avbryta ändringen av din order?",
                    "confirm": "Ja",
                    "cancel": "Nej"
                }
            },
            "modal": {
                "modal": {
                    "cart": {
                        "empty": {
                            "title": "Är du säker på att du vill tömma din varukorg?",
                            "confirm": "Töm",
                            "cancel": "Avbryt"
                        }
                    },
                    "deleteCard": {
                        "title": "Är du säker på att du vill ta bort ditt sparade kort?",
                        "confirm": "Ta bort"
                    },
                    "wishList": {
                        "update": {
                            "title": "Ändra namn på lista",
                            "label": "Listnamn"
                        },
                        "delete": {
                            "title": "Är du säker på att du vill ta bort listan?",
                            "titlePlural": "Är du säker på att du vill ta bort listorna?"
                        },
                        "pdp": {
                            "offline": {
                                "title": "Den här produkten är inte tillgänglig online"
                            }
                        }
                    },
                    "close": "Stäng",
                    "cancel": "Avbryt",
                    "confirm": "Spara",
                    "remove": "Ta bort",
                    "yes": "Ja",
                    "ok": "Ok"
                }
            },
            "order": {
                "heading": "Tack för din order!",
                "subHeadingRow1": "Ett bekräftelsemail har skickats till din e-postadress.",
                "subHeadingRow2": "Om du har frågor gällande din order, gå till <0>vanliga frågor och svar</0>.",
                "subHeadingLink": "/artikel/kundservice/vanliga-fragor-och-svar",
                "saveToList": "Spara som lista",
                "labels": {
                    "delivered": "Levererat",
                    "ordered": "Beställt",
                    "item": "vara",
                    "items": "varor",
                    "receipt": "Kvitto",
                    "orderNo": "Ordernummer",
                    "date": "Orderdatum",
                    "paymentMethod": "Betalsätt",
                    "transactionNumber": "Transaktionsnummer",
                    "deliveryModeAndTime": "Leveranssätt och tid",
                    "pickupStore": "Upphämtningsbutik",
                    "pickupInformation": "Övrig Information",
                    "deliveryAddress": "Leveransadress",
                    "contactDetails": "Kontaktuppgifter",
                    "doorCode": "Portkod",
                    "msgToDriver": "Meddelande till chauffören",
                    "orderStatus": "Status",
                    "partiallyDelivered": "Delvis levererat",
                    "notDelivered": "Kunde ej levereras",
                    "replaced": "Ersättningsvaror",
                    "replacedMessage": "Du betalar alltid det lägsta priset om ersättningsvaran är dyrare.",
                    "canceled": "** {{status}} **",
                    "credit": "Kreditering",
                    "online": "E-handel",
                    "tracking": "Följ din order",
                    "orderStatusPage": "Hämta order"
                },
                "currency": "kr",
                "addOrderToCart": {
                    "cta": "Lägg order i varukorg",
                    "heading": "Vill du lägga alla varor från ordern i varukorgen?",
                    "confirm": "Lägg till",
                    "cancel": "Avbryt"
                },
                "boughtAndSaved": {
                    "title": "Handlat och sparat",
                    "currency": "kr",
                    "totalPurchaseSum": "Handlat",
                    "totalMemberDiscountAmount": {
                        "text": "SPARAT MED WILLYS PLUS",
                        "line2": "WILLYS PLUS",
                        "line1": "SPARAT MED "
                    },
                    "totalBonusApplicable": {
                        "text": "SPARAT MED WILLYS PLUS {{year}}",
                        "line2": "WILLYS PLUS {{year}}",
                        "line1": "SPARAT MED"
                    }
                },
                "history": {
                    "buyHistoryTitle": "Köphistorik",
                    "chosenRange": "Vald period",
                    "orderedQuantity": "Beställda",
                    "deliverQuantity": "Levereras",
                    "ongoing": "Pågående ordrar",
                    "homeDelivery": {
                        "b2c": "Hemleverans",
                        "b2b": "Leverans"
                    },
                    "orderDetailLinkText": "Se order",
                    "noOrdersInRange": "Du har inga köp för den valda perioden. Välj en annan period i kalendern.",
                    "newCustomerMessage": "När du gjort ditt första köp med Willys Plus kommer du se det här.",
                    "orderNumber": "Ordernr: {{orderNumber}} ",
                    "deliveryMethod": "Leveranssätt",
                    "totalSum": "Summa",
                    "status": "Status",
                    "orderNumberMobile": "Ordernr",
                    "paymentMethod": "Betalsätt",
                    "pickUpInStore": "Hämta i butik",
                    "myPages": "På <0>Mina sidor</0> kan du välja att få dina kvitton digitalt.",
                    "purchases": "Köp",
                    "date": "Datum",
                    "sum": "Summa",
                    "saved": "Sparat",
                    "showMore": "Visa fler",
                    "orderFetchError": "Det går tyvärr inte att visa dina pågående ordrar just nu.",
                    "bonusFetchError": "Det går tyvärr inte att visa din köphistorik just nu.",
                    "noActiveOrders": "Du har ingen pågående order just nu.",
                    "datePicker": {
                        "cta": "OK"
                    }
                },
                "paymentMethods": {
                    "PspPayexAll": "Betalkort",
                    "Klarna": "Klarna",
                    "Invoice": "Faktura"
                },
                "statusCopy": {
                    "confirmation": {
                        "anonymous": "Via din <0>orderdetaljsida</0> kan du avbeställa din order fram till {{closeTimeAndDate}}",
                        "notAnonymous": "Via din <0>orderdetaljsida</0> kan du lägga till varor eller avbeställa din order fram till {{closeTimeAndDate}}"
                    },
                    "details": {
                        "anonymous": "Du kan avbeställa din order fram till {{closeTimeAndDate}}",
                        "notAnonymous": "Du kan lägga till varor eller avbeställa din order fram till {{closeTimeAndDate}}",
                        "cancelled": "Din order kommer tyvärr att ställas in, du kommer att bli kontaktad av kundtjänst."
                    },
                    "coAccount": {
                        "placedBy": "Order lagd av {{name}}.",
                        "notEditableByCoAcct": " Du kan inte ändra eller lägga till varor i denna order."
                    }
                },
                "cancelOrder": {
                    "button": "Avbeställ order"
                },
                "startChangingOrder": {
                    "button": "Ändra order"
                },
                "cancelChangingOrder": {
                    "button": "Avbryt ändring"
                },
                "modal": {
                    "buttons": {
                        "yes": "Ja",
                        "no": "Nej",
                        "ok": "Ok"
                    },
                    "title": {
                        "notReady": "Snart redo",
                        "cancelOrder": "Vill du avbeställa din order?",
                        "startChangingOrder": "Vill du ändra din order?",
                        "orderAlreadyOpen": "Något gick fel"
                    },
                    "text": {
                        "notReady": "Din order är snart redo att uppdateras. Försök igen om en liten stund.",
                        "startChangingOrder": "Om du öppnar ordern kommer priserna att justeras till det nu gällande priset.",
                        "orderAlreadyOpen": {
                            "line1": "Du ändrar redan order {{orderNumber}}.",
                            "line2": "Du behöver avsluta denna order innan du kan ändra en annan."
                        },
                        "orderCanNoLongerBeChanged": "Tyvärr kan du inte längre lägga till varor i din order",
                        "thisOrderAlreadyOpen": "Din order är redan i ändra-läge."
                    }
                }
            },
            "addToList": {
                "addToList": {
                    "empty": "Du har inga listor ännu. Skapa en ny lista för att kunna lägga till varan.",
                    "defaultListName": "Att handla {{date}}",
                    "cancel": "Avbryt",
                    "saveToList": "Spara till lista",
                    "snackBar": {
                        "text": "Varan sparad i lista",
                        "textPlural": "Varor sparade i lista",
                        "linkText": "Visa lista"
                    },
                    "heading": {
                        "unsaved": "Spara till lista",
                        "saved": "Sparad till lista!",
                        "new": "Skapa ny lista",
                        "choose": "Välj lista"
                    },
                    "button": {
                        "unsaved": "Spara",
                        "saved": "Gå till listan",
                        "title": "Spara till lista"
                    },
                    "input": {
                        "placeholder": "Ny lista"
                    },
                    "error": {
                        "onGetLists": "Något gick fel",
                        "onSave": "Kunde inte lägga till i lista, försök igen!",
                        "onCreate": "Kan inte spara ny lista!"
                    },
                    "new": {
                        "label": "Ny lista"
                    },
                    "selectedLabel": "Vald Lista",
                    "notSelectedLabel": "Lista"
                }
            },
            "deliverypicker": {
                "deliveryPicker": {
                    "state": {
                        "default": "Välj leveranssätt",
                        "pickUp": "<0>Hämta:</0> {{slotTime}}",
                        "pickUpShort": "Hämta",
                        "home": "<0>Hemleverans:</0> {{slotTime}}",
                        "homeShort": "Hemleverans"
                    },
                    "aria": {
                        "default": "Välj leveranssätt",
                        "selected": "Leveranssätt valt"
                    },
                    "titles": {
                        "chooseDeliveryMode": "Välj leveranssätt",
                        "pickUpInStore": "Hämta i butik",
                        "homeDelivery": "Hemleverans",
                        "homeDelivery_b2b": "Leverans",
                        "chooseSlot": "Välj tid"
                    },
                    "box": {
                        "pickUpInStore": "Hämta i butik",
                        "homeDelivery": "Hemleverans",
                        "homeDelivery_b2b": "Leverans"
                    },
                    "button": {
                        "ok": "Välj",
                        "cancel": "Avbryt",
                        "continue": "Forsätt"
                    },
                    "info": {
                        "pickUpInStore": "Välj butik för att se rätt sortiment.",
                        "homeDelivery": "Vi behöver veta ditt postnummer för att visa dig rätt sortiment. Just nu visas exempellager och lagret kan variera mellan butiker.",
                        "homeDeliveryAddress": "Ange din adress för att se rätt sortiment.",
                        "verifyAddress": "Vi behöver veta din adress för att visa dig rätt sortiment. Just nu visas exempellager och lagret kan variera mellan butiker."
                    },
                    "label": {
                        "chooseStore": "Välj butik",
                        "storeChosen": "Vald butik"
                    },
                    "price": {
                        "pickUpInStore": "Från 59 kr",
                        "homeDelivery": "Från 158 kr"
                    },
                    "placeholder": {
                        "store": "Sök på butik",
                        "postalCode": "Ange postnummer",
                        "address": "Ange adress"
                    },
                    "input": {
                        "address": "Adress"
                    },
                    "error": {
                        "noDeliveryAvailable": "Vi levererar tyvärr inte till ditt område än.",
                        "invalidAddress": "Ogiltig adress. Ange den enligt ex. Storgatan 1, 12345 Stad."
                    },
                    "autoComplete": {
                        "pickupLocation": {
                            "emptySlot": {
                                "head": "\"{{ search }}\", hittades inte.",
                                "text": "Sök på ort, adress eller butiksnamn.",
                                "notfound": "Hittar du inte din butik?",
                                "link": "Se alla Hämta-butiker"
                            },
                            "labels": {
                                "externalLocation": "Fristående Willys hämta"
                            },
                            "franchise": {
                                "storeNotChangeable": "Du kan ej byta till denna butik vid ändring av order."
                            }
                        },
                        "suggestionForYou": "Förslag till dig"
                    },
                    "addressChanger": {
                        "deliverTo": "Leverans till",
                        "pickUpFrom": "Hämtas från",
                        "change": "Ändra"
                    },
                    "tooltip": {
                        "title": "Leveranstid sparad",
                        "text": "Tiden släpps om du är inaktiv i 30 minuter."
                    },
                    "title": {
                        "default": "Välj leverans",
                        "pickUp": "Hämta",
                        "home": "Hemleverans"
                    },
                    "delivery.slot.is.null": "Tiden du har valt har gått ut. Vänligen välj en ny tid."
                }
            },
            "lostPassword": {
                "step1": {
                    "b2c": {
                        "label": "Personnummer / Willys Plus-nummer"
                    },
                    "b2b": {
                        "label": "Kundnummer"
                    },
                    "error": {
                        "b2c": "Ange personnummer (ååååmmddxxxx) eller Willys Plus-nummer på 16 siffror.",
                        "b2b": "Fel format. Vänligen ange ditt kundnummer i formen xxxxxx",
                        "noEmailPhone": "Vi saknar kontaktuppgifter till dig. Vänligen kontakta kundtjänst."
                    },
                    "email": {
                        "heading": "Återställ lösenord",
                        "submitButton": "Nästa"
                    },
                    "phone": {
                        "heading": "Återställ lösenord",
                        "submitButton": "Nästa"
                    },
                    "b2cTabTitle": "Privat",
                    "b2bTabTitle": "Företag"
                },
                "step2": {
                    "email": {
                        "submitButton": "Nästa",
                        "heading": "Återställ lösenord"
                    },
                    "phone": {
                        "submitButton": "Nästa",
                        "heading": "Återställ lösenord"
                    },
                    "title": "Välj hur du vill återställa ditt lösenord.",
                    "radioEmail": "Din e-post i vårt system:",
                    "radioPhone": "Ditt telefonnummer i vårt system:"
                },
                "step3": {
                    "email": {
                        "submitButton": "Skicka",
                        "heading": "Återställ lösenord",
                        "title": "Verifiera din e-postadress så skickar vi en länk för att återställa ditt lösenord.",
                        "label": "Din e-post i vårt system:",
                        "placeholder": "Ange din e-postadress"
                    },
                    "phone": {
                        "submitButton": "Skicka",
                        "heading": "Återställ lösenord",
                        "title": "Bekräfta ditt telefonnummer så skickar vi en kod för att återställa ditt lösenord.",
                        "label": "Ditt telefonnummer i vårt system:",
                        "placeholder": "Ange ditt telefonnummer"
                    }
                },
                "step4": {
                    "email": {
                        "heading": "Klart",
                        "submitButton": "Ok",
                        "infoText": "Vi har skickat en länk där du kan skapa ett nytt lösenord. Länken är giltig i 30 minuter. "
                    }
                },
                "step5": {
                    "passwordPlaceholder": "Nytt lösenord",
                    "repeatPasswordPlaceholder": "Upprepa lösenord",
                    "rememberMe": "Håll mig inloggad",
                    "email": {
                        "heading": "Skapa nytt lösenord",
                        "submitButton": "Skicka"
                    },
                    "phone": {
                        "heading": "Skapa nytt lösenord",
                        "submitButton": "Skicka",
                        "infoText": "Vi har skickat en 6-siffrig kod till telefonnummer <0>{{phone}}</0>. Koden är giltig i 30 minuter.",
                        "smsCodePlaceholder": "SMS-Kod"
                    }
                },
                "step6": {
                    "infoText": "Ditt nya lösenord har nu skapats.",
                    "phone": {
                        "heading": "Klart",
                        "submitButton": "Ok"
                    },
                    "email": {
                        "heading": "Klart",
                        "submitButton": "Ok"
                    }
                },
                "step7": {
                    "infoText": "Hoppsan! Tiden för att uppdatera ditt lösenord har gått ut. Prova att återställa det igen.",
                    "phone": {
                        "heading": "Något gick fel",
                        "submitButton": "Återställ lösenord"
                    },
                    "email": {
                        "heading": "Något gick fel",
                        "submitButton": "Återställ lösenord"
                    }
                },
                "error": {
                    "register.error.default": "Just nu krånglar tekniken, vänligen försök igen.",
                    "register.socialSecurityNumber.age": "Du måste ha fyllt 18 år för att handla.",
                    "register.socialSecurityNumber.invalidFormat": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                    "register.accountNumber.invalidFormat": "Personnumret/Medlemsnummer är i ogiltigt format. Var vänlig och kontrollera.",
                    "register.idInSourceSystem.noMatch": "Felaktigt Willys Plus-nummer.",
                    "register.email.noMatch": "Vi känner inte igen den angivna e-postadressen.",
                    "register.phone.noMatch": "Telefonnumret matchar inte ditt konto, vänligen försök igen.",
                    "register.email.invalidFormat": "E-postadressen är i ogiltigt format.",
                    "register.phone.invalidFormat": "Telefonnumret är i ogiltigt format. Behöver anges enligt 07XXXXXXXX. Var vänlig och kontrollera.",
                    "register.b2b.error.companyNotFound.message": "Vi hittar inget företag registrerat på organisationnumret du angav. Vänligen kontrollera att du angett korrekt information eller kontakta kundtjänst om problemet kvarstår.",
                    "register.b2b.error.companyNotFound": "Bisnode: ogiltigt företag",
                    "register.uid.unknown": "Personnumret eller medlemsnummer är i ogiltigt format. Var vänlig och kontrollera.",
                    "updatePwd.token.invalid": "Prova att återställa ditt lösenord igen",
                    "updatePwd.token.invalidated": "Prova att återställa ditt lösenord igen",
                    "updatePwd.token.expired": "Tiden för att uppdatera ditt lösenord har gått ut. Prova att återställa det igen.",
                    "updatePwd.smsToken.invalid": "Felaktig SMS-kod",
                    "updatePwd.smsToken.expired": "Tiden för att återställa ditt lösenord har gått ut. Återställ på nytt.",
                    "updatePwd": {
                        "smsToken": {
                            "expired": "Tiden för att återställa ditt lösenord har gått ut. Återställ på nytt.",
                            "invalid": "Felaktig SMS-kod"
                        },
                        "token": {
                            "expired": "Tiden för att uppdatera ditt lösenord har gått ut. Prova att återställa det igen.",
                            "invalid": "Prova att återställa ditt lösenord igen",
                            "invalidated": "Prova att återställa ditt lösenord igen"
                        }
                    },
                    "register": {
                        "uid": {
                            "unknown": "Personnumret eller medlemsnumret är i ogiltigt format. Vänligen kontrollera."
                        },
                        "b2b": {
                            "error": {
                                "companyNotFound": "Bisnode: ogiltigt företag"
                            }
                        },
                        "phone": {
                            "invalidFormat": "Telefonnumret är i ogiltigt format. Behöver anges enligt 07XXXXXXXX. Var vänlig och kontrollera.",
                            "noMatch": "Telefonnumret matchar inte ditt konto, vänligen försök igen."
                        },
                        "socialSecurityNumber": {
                            "invalidFormat": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                            "age": "Du måste ha fyllt 18 år för att handla."
                        },
                        "idInSourceSystem": {
                            "noMatch": "Felaktigt Willys Plus-nummer."
                        },
                        "error": {
                            "default": "Dina ändringar kunde inte sparas. Vänligen försök igen."
                        },
                        "accountNumber": {
                            "invalidFormat": "Personnumret/Medlemsnummer är i ogiltigt format. Var vänlig och kontrollera."
                        },
                        "email": {
                            "invalidFormat": "E-postadressen är i ogiltigt format.",
                            "noMatch": "Vi känner inte igen den angivna e-postadressen."
                        }
                    }
                },
                "infoTextHelp": "Behöver du hjälp?",
                "infoTextContact": "Kontakta kundtjänst",
                "b2bCustomer": "Företagskund?",
                "b2cCustomer": "Privatkund?",
                "resetPassword": "Återställ lösenord här",
                "b2bSubHeading": "Företag",
                "b2bNoAccountError": "Kundnumret hittades inte. Vänligen försök igen eller kontakta kundtjänst om du har frågor gällande kundnummer.",
                "modal": {
                    "title": "Inget konto hittades",
                    "text": "Du har inte ett konto hos oss. Vill du skapa ett konto?",
                    "cancelButton": "Avbryt",
                    "createAccountButton": "Skapa konto"
                }
            },
            "createAccount": {
                "step1": {
                    "b2c": {
                        "title": "Skapa konto",
                        "subTitle": "Willys Plus",
                        "placeholderSsn": "Personnummer (ååååmmddxxxx)",
                        "tabTitle": "Privat",
                        "formatError": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                        "tabTitleB2b": "Företag",
                        "tabTitleB2c": "Privat"
                    },
                    "b2b": {
                        "title": "Skapa konto",
                        "subTitle": "Företag",
                        "placeholderOrg": "Organisationsnummer (XXXXXX-XXXX)",
                        "tabTitle": "Företag",
                        "formatError": "Fel format. Vänligen ange ditt organisationsnummer enligt xxxxxx-xxxx",
                        "notAllowedOrgNumber": "Tyvärr kan du inte bli företagskund med denna bolagsform. <0>Kontakta kundtjänst</0> för mer information.",
                        "companyNotFound": "Konto kunde inte skapas med organisationnumret du angav. Vänligen kontrollera att du angett korrekt information eller kontakta kundtjänst om problemet kvarstår."
                    },
                    "error": {
                        "register.error.default": "Just nu krånglar tekniken, vänligen försök igen.",
                        "register.socialSecurityNumber.age": "Du måste ha fyllt 18 år för att handla.",
                        "register.socialSecurityNumber.invalidFormat": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                        "register": {
                            "socialSecurityNumber": {
                                "invalidFormat": "Fel format. Vänligen ange ditt personnummer enligt: ååååmmddxxxx",
                                "age": "Du måste ha fyllt 18 år för att handla."
                            },
                            "error": {
                                "default": "Just nu krånglar tekniken, vänligen försök igen."
                            }
                        }
                    },
                    "buttonText": "Nästa",
                    "infoText": "Redan Willys Plus-kund? <0>Logga in</0>"
                },
                "step2": {
                    "b2b": {
                        "title": "Skapa konto",
                        "subTitle": "Företag",
                        "companyName": "Företagsnamn",
                        "alternateCompanyNameCheckbox": "Jag vill ange ett alternativt företagsnamn",
                        "companyNamePlaceholder": "Ange företagsnamn",
                        "paymentHeading": "Välj önskat betalsätt",
                        "paymentCard": "Kortbetalning",
                        "paymentInvoice": "Faktura och kortbetalning",
                        "invoiceHeading": "Faktura",
                        "invoiceEmail": "E-post för faktura",
                        "invoiceNotice": "Inköp mot faktura kan göras först när kreditansökan blivit godkänd. Vi återkommer så snart den är klar, vanligtvis inom 1-2 vardagar. Det går alltid bra att betala med kort.",
                        "invoiceEmailPlaceholder": "Ange e-postadress",
                        "serviceProvider": "Tjänsteleverantörspartner",
                        "serviceProviderPlaceholder": "Ange tjänsteleverantörspartner",
                        "serviceProviderTooltip": "Den samarbetspartner ert företag använder sig av för att ta emot e-fakturor",
                        "invoiceReference": "Referens",
                        "invoiceReferencePlaceholder": "Ange referens",
                        "invoiceInfoText": "För dig som vill betala via autogiro kan du ansöka om det genom att skicka in en blankett som du finner på vår <0>sida för företagskunder.</0>",
                        "deliveryHeading": "Leveransadress",
                        "deliveryAddress": "Adress",
                        "deliveryAddressPlaceholder": "Ange gatuadress",
                        "postalCode": "Postnummer",
                        "postalCodePlaceholder": "Ange postnummer",
                        "town": "Postort",
                        "townPlaceholder": "Ange postort",
                        "invoiceCheckbox": "Välj annan fakturaadress",
                        "billingHeading": "Fakturaadress",
                        "billingAddress": "Adress",
                        "billingAddressPlaceholder": "Ange gatuadress",
                        "billingPostalCode": "Postnummer",
                        "billingPostalCodePlaceholder": "Ange postnummer",
                        "billingTown": "Postort",
                        "billingTownPlaceholder": "Ange postort",
                        "contactHeading": "Kontaktperson",
                        "firstName": "Förnamn",
                        "firstNamePlaceholder": "Ange förnamn",
                        "lastName": "Efternamn",
                        "lastNamePlaceholder": "Ange efternamn",
                        "email": "E-post",
                        "emailPlaceholder": "Ange e-postadress",
                        "phone": "Mobilnummer",
                        "phonePlaceholder": "Ange mobilnummer",
                        "password": "Lösenord (minst 6 tecken)",
                        "passwordPlaceholder": "Ange lösenord",
                        "checkPassword": "Upprepa lösenord",
                        "checkPasswordPlaceholder": "Ange lösenord",
                        "persistLogin": "Håll mig inloggad",
                        "terms": "Jag godkänner Willys <0>företagsavtal</0>. Läs om hur vi hanterar dina personuppgifter i Willys <1>integritetspolicy</1>*",
                        "submit": "Skicka",
                        "errors": {
                            "title": "Konto skapades inte",
                            "fromBE": "Just nu kan du inte skapa ett konto. Vänligen försök igen om en liten stund.",
                            "address": "Felaktig adress",
                            "missingLetter": "Gatunumret i den angivna adressen saknar en bokstav. Vänligen försök igen.",
                            "postalCode": "Felaktigt postnummer",
                            "invalidPostalCodeFormat": "Fel format, ange enligt xxxxx.",
                            "city": "Felaktig postort",
                            "invalidFormattedAddress": "Välj en leveransadress bland förslagen i listan."
                        },
                        "INVOICE_EMAIL": "Faktura via e-post (0 kr)",
                        "INVOICE_ELECTRONIC": "E-faktura (0 kr)",
                        "INVOICE_PAPER": "Pappersfaktura (50 kr)"
                    },
                    "b2c": {
                        "title": "Skapa konto",
                        "subTitle": "Willys Plus",
                        "ssn": "Personnummer",
                        "digitalReceiptSubscribe": "Ja tack, jag vill få digitala kvitton",
                        "digitalReceiptInfo": "Dina digitala kvitton finns under Mina köp på willys.se eller i Willys-appen. Du får inte längre fysiska kvitton i butik. <0>Läs mer om digitala kvitton.</0>",
                        "loginCheckbox": "Håll mig inloggad",
                        "acceptTerms": "Jag godkänner Willys Plus <0>villkor</0>. Läs om hur vi hanterar dina personuppgifter i Willys <1>integritetspolicy</1>*",
                        "submit": "Skicka",
                        "password": "Lösenord (Minst 6 tecken)",
                        "passwordPlaceholder": "Lösenord",
                        "passwordRepeat": "Upprepa lösenord",
                        "email": "E-post",
                        "emailPlaceholder": "Ange din e-postadress",
                        "phone": "Mobilnummer",
                        "phonePlaceholder": "Ange ditt telefonnummer"
                    },
                    "error": {
                        "title": "Konto skapades inte",
                        "general": "Just nu kan du inte skapa ett konto. Vänligen försök igen om en liten stund.",
                        "passwordFormatTitle": "Lösenordet ska bestå av:",
                        "passwordFormatError": "<0>6-30 tecken</0><1>En stor och en liten bokstav.</1><2>Följande specialtecken kan användas:</2>",
                        "passwordFormatCharacters": "\\/<>_~@$%^&+=`|{}:;!.,?[]"
                    }
                },
                "confirmation": {
                    "b2c": {
                        "preambleLine1": "Välkommen till",
                        "preambleLine2": "Willys<0>Plus</0>!",
                        "heading": "Grattis!",
                        "welcomeTextLine1": "Nu kan du börja handla som Willys Plus-kund.",
                        "welcomeTextLine2": "Ett bekräftelsemejl med dina kontouppgifter har skickats till: {{email}}",
                        "ctaText": "Se erbjudanden",
                        "uspHeading": "Willys<0>Plus</0>",
                        "uspBody": "När du skapar konto blir du Willys Plus-kund och kan göra en ännu bättre affär hos oss. Dessutom får du tillgång till flera digitala tjänster som förenklar din vardag.",
                        "usp1": "Fler och bättre erbjudanden",
                        "usp2": "Inget extra kort i plånboken",
                        "usp3": "Handlat & sparat",
                        "usp4": "Skapa inköpslistor"
                    }
                },
                "step3": {
                    "b2c": {
                        "title": "Välkommen till<0></0>Willys<1>Plus</1>!",
                        "heading": "Grattis!",
                        "welcomeText": "Nu kan du börja handla som Willys Plus-kund.<0></0>Ett bekräftelsemejl med dina kontouppgifter har skickats till: {{email}}",
                        "ctaText": "Se erbjudanden",
                        "uspHeading": "Willys<0>Plus</0>",
                        "uspBody": "När du skapar konto blir du Willys Plus-kund och kan göra en ännu bättre affär hos oss. Dessutom får du tillgång till flera digitala tjänster som förenklar din vardag.",
                        "usp1": "Fler och bättre erbjudanden",
                        "usp2": "Inget extra kort i plånboken",
                        "usp3": "Handlat & sparat",
                        "usp4": "Skapa inköpslistor"
                    },
                    "b2b": {
                        "titleLine1": "Välkommen som",
                        "titleLine2": "företagskund",
                        "heading": "Grattis!",
                        "welcomeText": "Du kan nu börja handla som företagskund med kundnummer <0>{{customerNo}}</0>. Ett bekräftelsemail med dina kontouppgifter har skickats till: {{email}}",
                        "invoiceNotice": "Har du valt faktura som betalmetod återkopplar vi så snart din kreditansökan blivit godkänd",
                        "ctaText": "Börja handla",
                        "title": "Välkommen som företagskund"
                    }
                },
                "modal": {
                    "notFound": {
                        "title": "Okänt organisationsnummer",
                        "text": "Vi hittar inget företag registrerat på organisationnumret du angav. Vänligen kontrollera att du angett korrekt information eller kontakta kundtjänst om problemet kvarstår."
                    },
                    "found": {
                        "title": "Konto hittades",
                        "text": "Företaget har redan ett konto. Du kan välja att logga in på befintligt konto eller att skapa ett nytt.",
                        "loginBtn": "Logga in",
                        "createAccountBtn": "Skapa konto"
                    }
                }
            },
            "bankid": {
                "logo": "BankID",
                "button": {
                    "signInMobile": "Signera med Mobilt BankID",
                    "signInDesktop": "Signera med BankID",
                    "signInMobileThisUnit": "Mobilt BankID på denna enhet",
                    "signInMobileOtherUnit": "Mobilt BankID på annan enhet"
                },
                "label": {
                    "ssn": "Personnummer"
                },
                "status": {
                    "ACCESS_DENIED_RP": "Något gick fel, försök igen.",
                    "ALREADY_IN_PROGRESS": "Åtgärden avbröts. Du kan göra ett nytt försök att signera om några minuter.",
                    "CANCELLED": "Åtgärden avbruten. Försök igen.",
                    "CERTIFICATE_ERR": "Det BankID du försöker använda är för gammalt eller spärrat. Använd ett annat BankID eller hämta ett nytt hos din internetbank.",
                    "CLIENT_ERR": "Internt tekniskt fel. Uppdatera BankID-appen och försök igen.",
                    "COMPLETE": "Signering genomförd",
                    "CONNECTION_ERROR": "Kunde inte ansluta till BankID, försök igen.",
                    "EXPIRED_TRANSACTION": "BankID-appen svarar inte. Kontrollera att den är startad och att du har internetanslutning. Om du inte har något giltigt BankID kan du hämta ett hos din Bank. Försök sedan igen",
                    "INTERNAL_ERROR": "Internt tekniskt fel. Försök igen.",
                    "INVALID_PARAMETERS": "Något gick fel, försök igen.",
                    "NO_CLIENT": "Starta BankID på den enhet där du har den installerad.",
                    "OUTOFSERVICE_ERROR": "Tjänsten är inte tillgänglig just nu försök igen senare.",
                    "OUTSTANDING_TRANSACTION": "Starta BankID på den enhet där du har den installerad.",
                    "PENDING": "Skriv in din säkerhetskod i BankID-appen och välj ”Legitimera” eller ”Skriv under”",
                    "RETRY": "Internt tekniskt fel. Försök igen.",
                    "SELECT_SIGN_IN_METHOD": "För att gå vidare behöver du signera med ditt BankID",
                    "START_FAILED": "BankID-appen verkar inte finnas i din dator eller telefon. Installera den och hämta ett BankID hos din internetbank. Installera appen från install.bankid.com.",
                    "UNAUTHORIZED_ERROR": "Kunde inte ansluta till BankID. Kontrollera personnummer.",
                    "UNDEFINED": "Något gick fel, försök igen.",
                    "USER_CANCEL": "Du har valt att avbryta legitimeringen eller underskriften i BankID säkerhetsapp.",
                    "USER_SIGN": "Skriv in din säkerhetskod i BankID-appen och välj ”Legitimera” eller ”Skriv under”"
                },
                "hintCode": {
                    "UNDEFINED": "Något gick fel, försök igen.",
                    "userCancel": "Du har valt att avbryta signeringen eller underskriften i BankID-säkerhetsapp.",
                    "outstandingTransaction": "Vänligen starta din BankID-app på din enhet."
                },
                "userMessage": {
                    "RFA1": "Starta BankID-appen",
                    "RFA2": "Du har inte BankID-appen installerad. Kontakta din internetbank.",
                    "RFA3": "Åtgärden avbruten. Försök igen.",
                    "RFA4": "En identifiering eller underskrift för det här personnumret är redan påbörjad. Försök igen.",
                    "RFA5": "Internt tekniskt fel. Försök igen.",
                    "RFA6": "Åtgärden avbruten.",
                    "RFA8": "BankID-appen svarar inte. Kontrollera att den är startad och att du har internetanslutning. Om du inte har något giltigt BankID kan du hämta ett hos din Bank. Försök sedan igen.",
                    "RFA9": "Skriv in din säkerhetskod i BankID- appen och välj Identifiera eller Skriv under.",
                    "RFA13": "Försöker starta BankID-appen.",
                    "RFA15": "Söker efter BankID… Om inget BankID hittats har du sannolikt inget BankID som går att använda för den aktuella identifieringen/underskriften i den här enheten. Om du inte har något BankID kan du hämta ett hos din internetbank.",
                    "RFA16": "Det BankID du försöker använda är för gammalt eller spärrat. Använd ett annat BankID eller hämta ett nytt hos din internetbank.",
                    "RFA17A": "BankID-appen verkar inte finnas i din dator eller telefon. Installera den och hämta ett BankID hos din internetbank. Installera appen från din appbutik eller https://install.bankid.com.",
                    "RFA17B": "Misslyckades att läsa av QR koden. Kontrollera att BankID-appen är uppdaterad. Om du inte har BankID-appen måste du installera den och hämta ett BankID hos din internetbank. Installera appen från din appbutik eller https://install.bankid.com.",
                    "RFA18": "Starta BankID-appen",
                    "RFA21": "Identifiering eller underskrift pågår.",
                    "RFA22": "Okänt fel. Försök igen.",
                    "customerNotFound": "Användaren hittades inte."
                }
            },
            "cartpreview": {
                "cart": {
                    "heading": "Varukorg",
                    "empty": {
                        "title": "Dags att börja handla!",
                        "mobileText": "Använd sökfunktionen eller menyn till vänster för att och lägga till varor.",
                        "anonymousText": "<0>Logga in</0> <1>in så kan du lägga till varor från dina vanligaste varor, inköpslistor eller från dina tidigare köp.</1>",
                        "loggedInText": "Tips! Du kan lägga till varor från dina <0>vanligaste varor</0>, <1>inköpslistor</1> eller från dina <2>tidigare köp.</2>",
                        "loggedInTextB2B": "Tips! Du kan lägga till varor från dina <0>inköpslistor</0> eller från dina <1>tidigare köp.</1>"
                    },
                    "amountZero": "0,00 kr",
                    "useSearchFunction": "Använd sökfunktionen eller menyn till vänster för att hitta och lägga till varor.",
                    "goToCheckout": "Gå till kassan",
                    "totalPrice": "Totalt ({{count}} varor)",
                    "youSave": "Du sparar",
                    "youCanSave": "Du kan spara ytterligare",
                    "logIn": "Logga in",
                    "or": " eller ",
                    "createAccount": "skapa konto",
                    "toSave": "för att spara mer.",
                    "nicotineLabel": "Får ej säljas vid misstanke om langning.",
                    "basketEmpty": "Din varukorg är tom!",
                    "snackbarYouSave": "Du sparar {{ amount }} kr",
                    "snackbarLoyalty": "Logga in för att ta del av Willys Plus-erbjudandet",
                    "snackbarLoyaltyLink": "Logga in",
                    "count": "Totalt antal i varukorg: {{ count }} st",
                    "total": "Total summa i varukorg: {{ total }}"
                },
                "loading": {
                    "title": "Hämtar din varukorg",
                    "body": "Snart kommer du se alla varor som lagts i varukorgen."
                },
                "button": {
                    "close": "Stäng",
                    "saveToList": "Spara till lista",
                    "clearCart": "Töm varukorg"
                },
                "a11y": {
                    "minicartLabel": "Varukorg",
                    "close": "Stäng"
                },
                "editorSuggestions": {
                    "logIn": "Logga in",
                    "myOrders": "Tidigare köp",
                    "myCommonItems": "Vanligaste varor",
                    "myLists": "Inköpslistor"
                }
            },
            "loginHint": {
                "loginHint": {
                    "title": "Som inloggad får du mer",
                    "desc": "Logga in eller skapa konto för att ta del av personliga erbjudanden och värdecheckar.",
                    "createAccount": "Skapa konto",
                    "loginIn": "Logga in"
                }
            },
            "productDetailsRelated": {
                "title": {
                    "samePromotion": "Produkter som ingår i samma erbjudande",
                    "othersBought": "Andra har också köpt...",
                    "similarProducts": "Liknande varor",
                    "otherVariants": "Liknande varor i samma serie"
                }
            },
            "breadcrumbs": {
                "home": "Hem",
                "myLists": "Mina listor"
            },
            "expandableContainer": {
                "showMore": "Visa mer",
                "showLess": "Visa mindre"
            },
            "loadMore": {
                "showMore": "Visa fler",
                "showing": "Visar {{x}} av {{y}}",
                "showAll": "Visa alla"
            },
            "account": {
                "title": "Mina uppgifter",
                "preamble": "Här kan du se och redigera dina kunduppgifter.",
                "customer": {
                    "id": "Willys plusnummer",
                    "name": "Namn",
                    "address": "Adress",
                    "careOfAddress": "C/O",
                    "email": {
                        "title": "Epost",
                        "new": "Ny e-postadress",
                        "repeat": "Upprepa ny e-postadress",
                        "placeholder": "Ange din e-postadress",
                        "subscribe": "Få information och erbjudanden via e-post",
                        "mismatch": "Fälten matchar inte",
                        "error": "Det går inte att uppdatera e-post just nu, vänligen försök igen om en liten stund."
                    },
                    "emailNotifications": {
                        "title": "Erbjudanden via e-post",
                        "checked": "Ja",
                        "unchecked": "Nej",
                        "label": "Ja tack, jag vill få erbjudanden via e-post",
                        "error": "Det går inte att uppdatera e-post preferens just nu, vänligen försök igen om en liten stund."
                    },
                    "phone": {
                        "title": "Mobilnummer",
                        "new": "Nytt mobilnummer",
                        "placeholder": "Ange mobilnummer (07xxxxxxxx)",
                        "error": "Det går inte att uppdatera telefonnummer just nu, vänligen försök igen om en liten stund."
                    },
                    "password": {
                        "title": "Lösenord",
                        "current": "Nuvarande lösenord",
                        "invalid": "Ogiltigt lösenord",
                        "new": "Nytt lösenord",
                        "repeat": "Upprepa nytt lösenord",
                        "placeholderCurrent": "Ange ditt lösenord",
                        "placeholderNew": "Ange 6-30 bokstäver/siffror",
                        "error": "Det går inte att uppdatera lösenord just nu, vänligen försök igen om en liten stund.",
                        "passwordFormatError": "Ogiltigt lösenord. Lösenordet ska bestå av 6-30 tecken, samt en stor och en liten bokstav. Följande specialtecken kan användas: \\/<>_~@$%^&*+=`|{}:;!.,?\"[]-.",
                        "passwordMatchError": "Fälten matchar inte",
                        "bankIdTooltip": "Du kan inte ändra ditt lösenord när du har loggat in med BankID. Logga ut och använd funktionen för återställ lösenord om du vill ändra ditt lösenord."
                    },
                    "household": {
                        "title": "Mitt hushåll",
                        "preamble": "Följande personer ingår i ditt Willys Plus-hushåll. Kontakta kundtjänst om du har en medkontohavare som du vill ta bort.",
                        "mainAccountHolder": "Huvudkontohavare",
                        "coAccountHolder": "Medkontohavare",
                        "tooltip": "Kontakta kundtjänst om du vill ta bort en medkontohavare.",
                        "addCoAccountHolder": {
                            "cta": "Lägg till medkontohavare",
                            "ssn": "Personnummer",
                            "ssnFormat": "Fel format. Vänligen ange ditt personnummer enligt: yyyymmddxxxx.",
                            "ssnPlaceholder": "Ange personnummer (ååååmmddxxxx)",
                            "email": "E-post",
                            "emailPlaceholder": "Ange e-postadress",
                            "phone": "Mobilnummer",
                            "phonePlaceholder": "Ange mobilnummer (07xxxxxxxx)",
                            "confirm": "Lägg till",
                            "cancel": "Avbryt"
                        },
                        "error": {
                            "heading": "Nu gick något snett",
                            "hasAccount": "Personen du försöker lägga till är redan Willys Plus-kund. Vänligen kontakta kundtjänst för att slå samman era hushåll.",
                            "generic": "Prova gärna igen om en liten stund eller kontakta kundtjänst.",
                            "confirm": "Ok",
                            "tooYoung": "Medkontohavare måste ha fyllt 18 år"
                        }
                    },
                    "cards": {
                        "title": "Mina sparade kort",
                        "savedCards": "E-handel och Scan & go",
                        "savedCardsPreamble": "Dessa kort är sparade för köp på e-handel och Scan & Go. Du kan spara ett nytt kort i samband med att du genomför en order på e-handel eller ett köp med Scan & Go",
                        "linkedCards": "Willys Plus",
                        "linkedCardsPreamble": "Du kan koppla ett kort till Willys Plus i kassan, i samband med betalning.",
                        "noCards": "Inga kort registrerade",
                        "type": "Korttyp",
                        "cardMobile": "Kort",
                        "card": "Kortnummer",
                        "expire": "Utgår",
                        "remove": {
                            "a11y": "Ta bort",
                            "title": "Vill du ta bort ditt sparade kort?",
                            "confirm": "Ja",
                            "cancel": "Nej",
                            "error": "Det går inte att ta bort kort just nu, vänligen försök igen om en liten stund."
                        }
                    }
                },
                "company": {
                    "title": "Kontouppgifter",
                    "preamble": "Behöver du ändra dessa uppgifter? <0>Kontakta kundtjänst</0> för att få hjälp.",
                    "companyName": "Firmanamn",
                    "altCompanyName": "Alternativt Firmanamn",
                    "orgNumber": "Organisationsnummer",
                    "shippingAddress": "Leveransadress",
                    "cards": {
                        "title": "Sparade kort",
                        "preamble": "Dessa kort är sparade för köp på willys.se. Om du vill spara ett nytt kort kan du göra det i samband med att du genomför betalning av en e-handelsorder."
                    },
                    "accountInformation": {
                        "title": "Kontouppgifter",
                        "preamble": "Behöver du ändra dessa uppgifter? <0>Kontakta kundtjänst</0> för att få hjälp.",
                        "companyName": "Firmanamn",
                        "altCompanyName": "Alternativt Firmanamn",
                        "orgNumber": "Organisationsnummer",
                        "shippingAddress": "Leveransadress"
                    },
                    "contactInformation": {
                        "title": "Kontaktperson",
                        "customerId": "Kundnummer",
                        "name": "Namn (Kontaktperson)",
                        "email": "E-post",
                        "phone": "Telefonnummer"
                    },
                    "paymentInformation": {
                        "title": "Betalsätt",
                        "invoiceTitle": "Faktura",
                        "paymentOption": "Valda betalsätt",
                        "invoiceOption": "Fakturaalternativ",
                        "invoiceRef": "Referens på faktura",
                        "creditPayment": "Faktura, kortbetalning",
                        "noCreditPayment": "Kortbetalning",
                        "paymentTooltip": "Vi erbjuder kort- och fakturabetalning för företagskunder. Om du endast ansökt om kortbetalning kan du ansöka om faktura via kundtjänst."
                    }
                },
                "digitalReceipt": {
                    "title": "Digitala kvitton",
                    "preamble": "Digitala kvitton nås under <0>Mina köp</0> på willys.se eller i Willys-appen. Du får inte längre fysiska kvitton i butik.",
                    "receiveDigitalReceipt": "Ja tack, jag vill få digitala kvitton.",
                    "readMore": "Läs mer om digitala kvitton",
                    "yes": "Ja",
                    "no": "Nej",
                    "error": "Just nu går det inte att spara ditt val. Försök igen om en stund."
                },
                "other": {
                    "title": "Övrigt",
                    "description": "Vi använder cookies och liknande tekniker i vår app.",
                    "readMore": "Läs mer om Cookie-inställningar."
                },
                "removeAccount": {
                    "description": "Avsluta mitt konto och medlemskap hos Willys.",
                    "button": "Avsluta konto"
                }
            },
            "buyAllProductsComponent": {
                "cancel": "Avbryt",
                "buyAllProducts": "Köp alla {{amount}} varor",
                "buyAmountOfProducts": "Köp {{amount}} av {{total}} varor",
                "snackMessage": "Varorna tillagda i varukorgen"
            },
            "orderCloseTimePassedModal": {
                "modal": {
                    "text": {
                        "line1": "Sista tid för att ändra order har passerat.",
                        "line2": "Din senast lagda order kommer att gälla."
                    },
                    "title": "Orderändring avbryts",
                    "buttons": {
                        "ok": "Ok"
                    }
                }
            },
            "promotionPage": {
                "title": {
                    "online": "Erbjudanden E-handel",
                    "offline": "Erbjudanden i butik"
                },
                "heading": "Erbjudanden",
                "ecommerce": "E-handel",
                "store": "Butik",
                "chooseStoreForCorrectAssortment": "Välj butik för att se rätt sortiment",
                "chooseStoreInfo": "Välj butik för att se rätt erbjudanden och reklamblad",
                "chooseStoreAction": "Välj butik",
                "chooseDeliveryInfo": "Välj leveranssätt för att se rätt sortiment",
                "chooseDeliveryAction": "Välj leveranssätt",
                "changeStore": "Ändra",
                "storeFlyer": "Se reklamblad",
                "promotions": "Erbjudanden",
                "personalCampaigns": "Mina erbjudanden",
                "deliveryAlert": {
                    "button": "Välj leveranssätt",
                    "body": "Vi behöver veta din butik för att visa dig rätt sortiment. Just nu visas exempellager och lagret kan variera mellan butiker."
                },
                "preview": {
                    "title": "Förhandsgranska erbjudanden",
                    "showProductsWithoutImages": "Visa endast produkter utan bild",
                    "noMatchesDateRange": "Det finns inga erbjudanden att visa för detta tidsintervall.",
                    "noMatchesDateRangeAndFilter": "Det finns inga erbjudanden att visa för detta filter och tidsintervall."
                },
                "storeNotOpenYet": "Butiken du har valt har inte öppnat ännu. Erbjudanden kommer att publiceras på butikens öppningsdag.",
                "tooltipPersonalTitle": "Om dessa erbjudanden",
                "tooltipPersonalText": "Personliga erbjudanden innebär att priset på en vara har personanpassats på teknisk väg (automatiserat beslutsfattande) baserat på information vi har om dig som kund. <0>Läs mer.</0>",
                "deliverTo": "Leverans:",
                "pickUpFrom": "Hämta:",
                "totalResults": "{{totalResult}} varor",
                "snackbar": {
                    "storeChosen": "Butik vald",
                    "storeSelectionFailed": "Det gick inte att välja butik, försök igen.",
                    "StoreChosen": "Butik vald"
                },
                "selectStore": "Här ser du erbjudanden när du valt en butik",
                "stickyDeliveryPicker": {
                    "change": "Ändra",
                    "deliveryNotSelected": "Leveranssätt ej valt",
                    "default": {
                        "butik": {
                            "text": "Visar exempelsortiment för butik: "
                        },
                        "ehandel": {
                            "text": "Visar exempelsortiment för e-handel: "
                        }
                    },
                    "butik": {
                        "text": "Visar erbjudanden för butik: "
                    },
                    "ehandel": {
                        "text": "Visar erbjudanden för e-handel: "
                    }
                },
                "a11y": {
                    "storeTabActive": "Erbjudanden för butik visas",
                    "storeTabInactive": "Välj för att visa erbjudanden för butik",
                    "ecommerceTabActive": "Erbjudanden för e-handel visas",
                    "ecommerceTabInactive": "Välj för att visa erbjudanden för e-handel"
                },
                "showAll": "Visa alla"
            },
            "productFilter": {
                "filter": "Filtrera",
                "appliedFilters": "Filter ({{amount}})",
                "clearFilters": "Rensa filter",
                "singleFilterSelected": "1 filter valt",
                "multipleFilterSelected": "{{amount}} filter valda",
                "selectedFilters": "Valda filter",
                "done": "Visa {{amount}} varor",
                "clear": "Rensa filter",
                "title": "Filtrera",
                "showAll": "Visa fler",
                "showLess": "Visa färre",
                "resetFilterNotification": "Filter rensade!",
                "totalResults": "{{totalResult}} varor",
                "categories": {
                    "commercialName2": "Varumärken",
                    "category": "Sortiment",
                    "categoryLevel1": "Kategori",
                    "categoryLevel2": "Kategori",
                    "campaignType": "Erbjudande",
                    "label": "Märkningar",
                    "productLabelTypes": "Märkningar",
                    "popular": "Populärast",
                    "promotionTheme": "Kampanjtema",
                    "concept": "Koncept"
                },
                "accessibility": {
                    "filterOption": "{{name}} {{count}} produkter"
                }
            },
            "searchresultpage": {
                "searchTerm": "Sökord: {{searchTerm}}",
                "usedQueryHeading": "Visar resultat för \"{{usedQuery}}\"",
                "totalResults": "{{totalResult}} varor",
                "nohits": "Din sökning gav tyvärr ingen träff.",
                "emptyQuery": "Hoppsan! Sökfältet var tomt.",
                "emptyQueryLine2": "Försök igen genom att ange ett sökord i sökfältet.",
                "didyoumean": "Menade du <0>{{suggestion}}</0>?",
                "checkYourSpelling": "Kontrollera stavning eller använd ett mindre specifikt sökord.",
                "suggestion": "Letar du efter <0>{{query}}</0>?",
                "searchPageTitle": "Sökresultat för {{searchTerm}} | Willys",
                "searchPageDescription": "Sökningen efter {{searchTerm}} gav {{totalResult}} träffar.",
                "relatedResultsHeading": "Relaterade varor",
                "relatedResults": "Relaterade varor",
                "areULookingFor": "Letar du efter \"{{word}}\"?"
            },
            "vouchercard": {
                "voucher": {
                    "title": "Värdecheck",
                    "text": "Giltig t.o.m",
                    "button": "Visa kod",
                    "modal": {
                        "title": "Värdecheck {{value}} {{unit}}",
                        "omni": {
                            "text": "Ange den sjusiffriga koden för att lösa in din värdecheck i butik. Om du handlar online finns den att lägga till i kassan på willys.se. Värdechecken kan inte växlas in mot pengar.",
                            "requirements": "Minsta köpbelopp {{value}} kr. ",
                            "validIn": "Gäller i butik och online."
                        },
                        "online": {
                            "text": "Värdechecken finns att lägga till i kassan på willys.se. Den kan inte växlas in mot pengar.",
                            "requirements": "Minsta köpbelopp {{value}} kr. ",
                            "validIn": "Gäller endast online."
                        },
                        "selfcheckout": {
                            "text": "Ange den sjusiffriga koden för att lösa in din värdecheck när du betalar i snabbkassan. Värdechecken kan inte växlas in mot pengar",
                            "requirements": "Minsta köpbelopp {{value}} kr. ",
                            "validIn": "Gäller endast i snabbkassan."
                        },
                        "selfscan": {
                            "text": "I Scan&Go finns din värdecheck att lägga till i samband med betalning. Värdechecken kan inte växlas in mot pengar.",
                            "requirements": "Minsta köpbelopp {{value}} kr. ",
                            "validIn": "Gäller endast vid självscanning med Scan&Go."
                        },
                        "validUntil": "Giltig t.o.m {{date}}",
                        "code": "Ange kod:",
                        "percentageValue": "procent",
                        "absoluteValue": "kronor",
                        "button": "Ok"
                    },
                    "usedVoucher": "Nyttjad värdecheck",
                    "code": "Ange kod:",
                    "backside": {
                        "selfcheckout": {
                            "first": "Mata in den sjusiffriga koden på skärmen i snabbkassan för att lösa in din värdecheck. Värdechecken gäller endast när du handlar i snabbkassan",
                            "second": "Värdechecken kan inte växlas in mot pengar."
                        },
                        "selfscan": {
                            "first": "Mata in den sjusiffriga koden på skärmen vid utcheckning för att lösa in din värdecheck. I Scan&Go finns din värdecheck att lägga till i samband med betalning.",
                            "second": "Värdechecken kan inte växlas in mot pengar."
                        },
                        "minPurchaseAmount": {
                            "selfcheckout": " och för minst {{minPurchaseAmount}}.",
                            "selfscan": " och handlar för minst {{minPurchaseAmount}}.",
                            "online": " och för minst {{minPurchaseAmount}}. ",
                            "omni": " Den gäller endast när du handlar för minst {{minPurchaseAmount}}."
                        },
                        "online": {
                            "first": "Värdechecken finns att lägga till när du checkar ut din order på willys.se. Den gäller endast när du handlar online",
                            "second": "Värdechecken kan inte växlas in mot pengar."
                        },
                        "omni": {
                            "first": "Ange den sjusiffriga koden för att lösa in din värdecheck. Om du handlar online finns den att lägga till när du checkar ut din order på willys.se.",
                            "second": "Värdechecken kan inte växlas in mot pengar."
                        }
                    },
                    "channel": {
                        "selfcheckout": "Gäller <strong>endast</strong> i snabbkassan",
                        "selfscan": "Gäller <strong>endast</strong> vid självscanning ink Scan&Go.",
                        "online": "Gäller <strong>endast</strong> online",
                        "omni": "Gäller i butik och online"
                    },
                    "icon": {
                        "close": "Stäng",
                        "info": "Mer information"
                    },
                    "used": "Nyttjad",
                    "purchaseAmount": {
                        "min": "Minsta köpbelopp {{value}}"
                    },
                    "codeInStore": "Ange kod i butik:",
                    "currency": {
                        "sek": "kr"
                    },
                    "codeInOnlineStore": "Lägg till i kassan online",
                    "expirationDate": "giltig t.o.m: {{date}}"
                }
            }
        }
    },
    "__N_SSG": true
}