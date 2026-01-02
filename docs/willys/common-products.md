
## Request

fetch("https://www.willys.se/axfoodcommercewebservices/v2/willys/cms/pages?pageType=ContentPage&pageLabelOrId=minavanligastevaror&code=&fields=DEFAULT", {
  "headers": {
    "content-type": "application/json",
    "newrelic": "eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkJyb3dzZXIiLCJhYyI6IjExNTQxOTYiLCJhcCI6Ijc3MjMyNDIwMyIsImlkIjoiMDVkOWUzNzcyYjNhMWQ3YiIsInRyIjoiMjM5MDUxYzkxNmVmYTE0ZWZlYTRmNjQwM2VjNDkyOWIiLCJ0aSI6MTc1NjU1OTc0MzkxMX19",
    "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "traceparent": "00-239051c916efa14efea4f6403ec4929b-05d9e3772b3a1d7b-01",
    "tracestate": "1154196@nr=0-1-1154196-772324203-05d9e3772b3a1d7b----1756559743911",
    "x-csrf-token": "d1b51f74-12fd-4f1d-a56d-a72fab322603"
  },
  "referrer": "",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});


## Response

{
   "uid" : "page_00004GHU",
   "uuid" : "eyJpdGVtSWQiOiJwYWdlXzAwMDA0R0hVIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
   "title" : "Mina vanligaste varor | Willys",
   "description" : "På den här sidan visar vi just dina vanligaste varor.",
   "canonical" : "https://www.willys.se/minavanligastevaror",
   "template" : "WillysDynamicMasterTemplate",
   "typeCode" : "ContentPage",
   "name" : "Mina Vanligaste Varor (ny)",
   "contentSlots" : {
      "contentSlot" : [ {
         "key" : "HeaderCenterSlot",
         "value" : {
            "slotId" : "HeaderCenterSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJIZWFkZXJDZW50ZXJTbG90IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
            "position" : "HeaderCenter",
            "name" : "HeaderCenterSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ {
                  "uid" : "WillysTopmenuLinksComponent",
                  "uuid" : "eyJpdGVtSWQiOiJXaWxseXNUb3BtZW51TGlua3NDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                  "typeCode" : "AxfoodTopmenuLinksComponent",
                  "name" : "AxfoodTopmenuLinksComponent",
                  "container" : "false",
                  "synchronizationBlocked" : "false",
                  "navigationNode" : {
                     "uid" : "WillysTopMenuLinksNavNode",
                     "entries" : [ ],
                     "links" : [ ],
                     "children" : [ {
                        "uid" : "willysCampaignNode",
                        "entries" : [ ],
                        "links" : [ {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv",
                              "value" : "Erbjudanden"
                           } ],
                           "target" : false,
                           "url" : "/erbjudanden"
                        } ],
                        "children" : [ ],
                        "title" : "Erbjudanden"
                     }, {
                        "uid" : "willysStoreFinderNode",
                        "entries" : [ ],
                        "links" : [ {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv",
                              "value" : "Hitta butik"
                           } ],
                           "target" : false,
                           "url" : "/butik-sok"
                        } ],
                        "children" : [ ],
                        "title" : "Hitta butik"
                     }, {
                        "uid" : "willysCustomerServiceNode",
                        "entries" : [ ],
                        "links" : [ {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv"
                           } ],
                           "target" : false,
                           "url" : "/artikel/kundservice"
                        } ],
                        "children" : [ ],
                        "title" : "Kundservice"
                     }, {
                        "uid" : "item_00003PHK",
                        "entries" : [ ],
                        "links" : [ {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv",
                              "value" : "Willys Plus"
                           } ],
                           "target" : false,
                           "url" : "/artikel/om-oss/willys-plus"
                        } ],
                        "children" : [ ],
                        "title" : "Willys Plus"
                     } ],
                     "title" : "Willys Top Menu Navigation Node"
                  }
               } ]
            }
         }
      }, {
         "key" : "HeaderLeftSlot",
         "value" : {
            "slotId" : "HeaderLeftSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJIZWFkZXJMZWZ0U2xvdCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
            "position" : "HeaderLeft",
            "name" : "HeaderLeftSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ {
                  "uid" : "SiteLogoComponent",
                  "uuid" : "eyJpdGVtSWQiOiJTaXRlTG9nb0NvbXBvbmVudCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                  "typeCode" : "SimpleBannerComponent",
                  "name" : "Site Logo Component",
                  "container" : "false",
                  "external" : "false",
                  "synchronizationBlocked" : "false",
                  "media" : {
                     "code" : "willys_logo.svg",
                     "mime" : "image/svg+xml",
                     "altText" : "Willys",
                     "url" : "https://media.occ.axfood.se/he9/h4c/8878098546718/willys_logo.svg"
                  },
                  "urlLink" : "/",
                  "target" : "sameWindow"
               } ]
            }
         }
      }, {
         "key" : "NavigationLeftSlot",
         "value" : {
            "slotId" : "NavigationLeftSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJOYXZpZ2F0aW9uTGVmdFNsb3QiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
            "position" : "NavigationLeft",
            "name" : "NavigationLeftSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ {
                  "uid" : "LeftMenuComponent",
                  "uuid" : "eyJpdGVtSWQiOiJMZWZ0TWVudUNvbXBvbmVudCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                  "typeCode" : "LeftMenuComponent",
                  "name" : "Left Menu Component",
                  "container" : "false",
                  "linksRootNavigationNode" : {
                     "uid" : "LeftMenuLinksNode"
                  },
                  "synchronizationBlocked" : "false",
                  "categoryRootNavigationNode" : {
                     "uid" : "NavigationRootNode"
                  },
                  "navigationNode" : {
                     "uid" : "LeftMenuLinksNode",
                     "entries" : [ ],
                     "links" : [ ],
                     "children" : [ {
                        "uid" : "Header_menu",
                        "entries" : [ ],
                        "links" : [ {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv",
                              "value" : "Erbjudanden"
                           } ],
                           "target" : false,
                           "url" : "/erbjudanden"
                        }, {
                           "external" : false,
                           "linkName" : [ {
                              "key" : "sv",
                              "value" : "Mina vanligaste varor"
                           } ],
                           "target" : false,
                           "url" : "/minavanligastevaror"
                        } ],
                        "children" : [ {
                           "uid" : "Navigationnode_inspiration",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Allt till sommaren"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/sommar"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Årets nya glassar"
                              } ],
                              "target" : false,
                              "url" : "/artikel/glassnyheter"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Starta grillen här"
                              } ],
                              "target" : false,
                              "url" : "/artikel/grill"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Goda nyheter"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/nyheter"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Billigt och gott"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/billigmat"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Bra att ha hemma"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/braatthahemma"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Goda mellanmål"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/generationpep"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Eko-nomiska priser"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/eko"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Vego för alla"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/vego"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Schyssta priser på svenskt"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/svenskmat"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Utmärkt fisk"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/utmarktfisk"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Se mer inspiration"
                              } ],
                              "target" : false,
                              "url" : "/artikel/inspiration/arkiv"
                           } ],
                           "children" : [ ],
                           "title" : "Inspiration"
                        }, {
                           "uid" : "Smarta_verktyg",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Listsök"
                              } ],
                              "target" : false,
                              "url" : "/artikel/listsok"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Mina listor"
                              } ],
                              "target" : false,
                              "url" : "/mina-listor"
                           } ],
                           "children" : [ ],
                           "title" : "Smarta verktyg"
                        } ],
                        "title" : "Meny"
                     } ]
                  }
               } ]
            }
         }
      }, {
         "key" : "SearchBoxSlot",
         "value" : {
            "slotId" : "SearchBoxSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJTZWFyY2hCb3hTbG90IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
            "position" : "SearchBox",
            "name" : "SearchBoxSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ {
                  "uid" : "SearchBox",
                  "uuid" : "eyJpdGVtSWQiOiJTZWFyY2hCb3giLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                  "typeCode" : "SearchBoxComponent",
                  "name" : "Search Box",
                  "container" : "false",
                  "maxSuggestions" : "5",
                  "maxProducts" : "0",
                  "displaySuggestions" : "true",
                  "synchronizationBlocked" : "false",
                  "displayProducts" : "false",
                  "displayProductImages" : "false",
                  "waitTimeBeforeRequest" : "500",
                  "minCharactersBeforeRequest" : "2"
               } ]
            }
         }
      }, {
         "key" : "cs_00004KCQ",
         "value" : {
            "slotId" : "cs_00004KCQ",
            "slotUuid" : "eyJpdGVtSWQiOiJjc18wMDAwNEtDUSIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
            "position" : "MainContent",
            "name" : "Default MainContent for Mina Vanligaste Varor (ny)",
            "slotShared" : false,
            "components" : {
               "component" : [ {
                  "uid" : "comp_0000H2YX",
                  "uuid" : "eyJpdGVtSWQiOiJjb21wXzAwMDBIMllYIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                  "typeCode" : "AxfoodMostBoughtWithSearchProductBannerComponent",
                  "name" : "AxfoodMostBoughtWithSearchProductBannerComponent_mvv",
                  "emptyProductListBody" : "På den här sidan visar vi dina vanligaste varor. Ser du inga varor än, så kommer de så snart du gjort ditt första köp.",
                  "container" : "false",
                  "cartFilter" : "true",
                  "scroll" : "ONE",
                  "title" : "Här hittar du dina vanligaste varor",
                  "popup" : "true",
                  "displayType" : "PERSONALISED_PRODUCT_RECOMMENDATIONS_WITH_FILTERS",
                  "synchronizationBlocked" : "true",
                  "useSpssSort" : "false",
                  "minProducts" : "7",
                  "numberOfRows" : "5"
               } ]
            }
         }
      }, {
         "key" : "MessageBoxSlot",
         "value" : {
            "slotId" : "MessageBoxSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJNZXNzYWdlQm94U2xvdCIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
            "position" : "MessageBox",
            "name" : "MessageBoxSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ ]
            }
         }
      }, {
         "key" : "cs_0000BCYA",
         "value" : {
            "slotId" : "cs_0000BCYA",
            "slotUuid" : "eyJpdGVtSWQiOiJjc18wMDAwQkNZQSIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
            "position" : "TopRightContent",
            "name" : "Default TopRightContent for Mina Vanligaste Varor (ny)",
            "slotShared" : false,
            "components" : {
               "component" : [ ]
            }
         }
      }, {
         "key" : "FooterCenterSlot",
         "value" : {
            "slotId" : "FooterCenterSlot",
            "slotUuid" : "eyJpdGVtSWQiOiJGb290ZXJDZW50ZXJTbG90IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
            "position" : "FooterCenter",
            "name" : "FooterCenterSlot",
            "slotShared" : true,
            "components" : {
               "component" : [ {
                  "uid" : "FooterComponent",
                  "uuid" : "eyJpdGVtSWQiOiJGb290ZXJDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                  "typeCode" : "AxfoodFooterComponent",
                  "name" : "Länkar sidfot",
                  "container" : "false",
                  "socialLinks" : {
                     "instagram" : {
                        "container" : "false",
                        "uid" : "instagram",
                        "external" : "false",
                        "name" : "Instagram",
                        "synchronizationBlocked" : "false",
                        "uuid" : "eyJpdGVtSWQiOiJpbnN0YWdyYW0iLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                        "linkName" : "Instagram",
                        "url" : "https://www.instagram.com",
                        "typeCode" : "CMSLinkComponent",
                        "target" : "newWindow"
                     },
                     "twitter" : {
                        "container" : "false",
                        "uid" : "twitter",
                        "external" : "false",
                        "name" : "Twitter",
                        "synchronizationBlocked" : "false",
                        "uuid" : "eyJpdGVtSWQiOiJ0d2l0dGVyIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                        "linkName" : "Twitter",
                        "url" : "https://www.twitter.com",
                        "typeCode" : "CMSLinkComponent",
                        "target" : "newWindow"
                     },
                     "facebook" : {
                        "container" : "false",
                        "uid" : "facebook",
                        "external" : "false",
                        "name" : "Facebook",
                        "synchronizationBlocked" : "false",
                        "uuid" : "eyJpdGVtSWQiOiJmYWNlYm9vayIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
                        "linkName" : "Facebook",
                        "url" : "www.facebook.com/Willys",
                        "typeCode" : "CMSLinkComponent",
                        "target" : "newWindow"
                     }
                  },
                  "coreLinks" : {
                     "my-willy-plus" : {
                        "container" : "false",
                        "uid" : "my-willy-plus",
                        "external" : "false",
                        "name" : "My Willy+",
                        "synchronizationBlocked" : "false",
                        "uuid" : "eyJpdGVtSWQiOiJteS13aWxseS1wbHVzIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                        "linkName" : "Mitt konto",
                        "url" : "/#/mitt-konto",
                        "typeCode" : "CMSLinkComponent",
                        "target" : "sameWindow"
                     }
                  },
                  "showLanguageCurrency" : "false",
                  "wrapAfter" : "0",
                  "synchronizationBlocked" : "false",
                  "bottomLinks" : {
                     "WillysFooterCopyrightText" : {
                        "container" : "false",
                        "uid" : "WillysFooterCopyrightText",
                        "external" : "false",
                        "name" : "Willys Footer Copyright Text",
                        "synchronizationBlocked" : "false",
                        "uuid" : "eyJpdGVtSWQiOiJXaWxseXNGb290ZXJDb3B5cmlnaHRUZXh0IiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                        "linkName" : "©Willys",
                        "typeCode" : "CMSLinkComponent",
                        "target" : "sameWindow"
                     }
                  },
                  "navigationNode" : {
                     "uid" : "WillysFooterLinksNavNode",
                     "entries" : [ ],
                     "links" : [ ],
                     "children" : [ {
                        "uid" : "WillysFooterLinksLeftNode",
                        "entries" : [ ],
                        "links" : [ ],
                        "children" : [ {
                           "uid" : "WillysAboutNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Om oss"
                              } ],
                              "target" : false,
                              "url" : "/artikel/om-oss"
                           } ],
                           "children" : [ {
                              "uid" : "WillysVarHistoriaPageNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Vår historia"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/var-historia"
                              } ],
                              "children" : [ ],
                              "title" : "Vår historia"
                           }, {
                              "uid" : "WillysVarAffarsidePageNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Vår affärsidé"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/var-affarside"
                              } ],
                              "children" : [ ],
                              "title" : "Vår affärsidé"
                           }, {
                              "uid" : "WillysAllaRattTillBraMatPageNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Allas rätt till bra mat"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/allas-ratt-till-bra-mat"
                              } ],
                              "children" : [ ],
                              "title" : "Bra mat för alla"
                           }, {
                              "uid" : "WillysSustainabilityNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Hållbarhet"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/hallbarhet"
                              } ],
                              "children" : [ {
                                 "uid" : "WillysGreenRedNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Resurseffektiva butiker"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/hallbarhet/grona-butiker-roda-priser"
                                 } ],
                                 "children" : [ {
                                    "uid" : "Vår klimatpåverkan",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Vår klimatpåverkan"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/var-klimatpaverkan"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Vår klimatpåverkan"
                                 } ],
                                 "title" : "Resurseffektiva butiker"
                              }, {
                                 "uid" : "WillysGoodEnvironmentalNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Bra miljöval"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/hallbarhet/bra-miljoval"
                                 } ],
                                 "children" : [ {
                                    "uid" : "WillysPVCNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "PVC"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/bra-miljoval/pvc"
                                    } ],
                                    "children" : [ ],
                                    "title" : "PVC"
                                 }, {
                                    "uid" : "WillysEcoLabeledToysNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Miljömärkta leksaker"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/bra-miljoval/miljomarkta-leksaker"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Miljömärkta leksaker"
                                 } ],
                                 "title" : "Bra miljöval"
                              }, {
                                 "uid" : "WillysAnsvarsfulltSortimentPageNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Ansvarsfullt sortiment"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/hallbarhet/ansvarsfullt-sortiment"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Ansvarsfullt sortiment"
                              }, {
                                 "uid" : "WillysWasteSmartNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Svinnsmart"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/hallbarhet/svinnsmart"
                                 } ],
                                 "children" : [ {
                                    "uid" : "WillysOurGoalNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Vår målsättning"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/var-malsattning"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Vår målsättning"
                                 }, {
                                    "uid" : "WillysBecomeWasteSmartNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Bli svinnsmart"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/bli-svinnsmart"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Bli svinnsmart"
                                 }, {
                                    "uid" : "WillysWasteSmartCooperationNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Svinnsmarta samarbeten"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/svinnsmarta-samarbeten"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Svinnsmarta samarbeten"
                                 }, {
                                    "uid" : "WillysReduceWasteNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Så minskar vi matsvinnet"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/sa-minskar-vi-matsvinnet"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Så minskar vi matsvinnet"
                                 }, {
                                    "uid" : "WillysDenHarMatenSlangsMestNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Den här maten slängs mest"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/undersokning"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Den här maten slängs mest"
                                 }, {
                                    "uid" : "WillysFoodCommissionNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Matmissionen"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/matmissionen"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Matmissionen"
                                 }, {
                                    "uid" : "WillysVaraSvinnsmartaProdukterNode",
                                    "entries" : [ ],
                                    "links" : [ {
                                       "external" : false,
                                       "linkName" : [ {
                                          "key" : "sv",
                                          "value" : "Våra svinnsmarta produkter"
                                       } ],
                                       "target" : false,
                                       "url" : "/artikel/om-oss/hallbarhet/svinnsmart/varor"
                                    } ],
                                    "children" : [ ],
                                    "title" : "Våra svinnsmarta produkter"
                                 } ],
                                 "title" : "Svinnsmart"
                              }, {
                                 "uid" : "WillysSaveTheChildrenNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Rädda Barnen"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/hallbarhet/samhallsengagemang"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Samhällsengagemang"
                              } ],
                              "title" : "Hållbarhet"
                           }, {
                              "uid" : "WillysNewsNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Nyheter & press"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/nyheter-och-press"
                              } ],
                              "children" : [ ],
                              "title" : "Nyheter & press"
                           }, {
                              "uid" : "WillysWillysPlusNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Willys Plus"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/om-oss/willys-plus"
                              } ],
                              "children" : [ {
                                 "uid" : "WillysBetterDealNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "En ännu bättre affär"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/willys-plus/en-annu-battre-affar"
                                 } ],
                                 "children" : [ ],
                                 "title" : "En ännu bättre affär"
                              }, {
                                 "uid" : "WillysWillysPlusPaFleraSprakNode",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Willys plus på flera språk"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/willys-plus/willys-plus-pa-flera-sprak"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Willys Plus på flera språk"
                              }, {
                                 "uid" : "WillysUtanPersonnummer",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Ansluta utan personnnummer"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/om-oss/willys-plus/utan-personnummer"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Ansluta utan personnummer"
                              } ],
                              "title" : "Willys Plus"
                           }, {
                              "uid" : "Willys Dataskydd Node",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Dataskydd"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/villkor-dataskydd"
                              } ],
                              "children" : [ {
                                 "uid" : "Node Integritetspolicy",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Integritetspolicy"
                                    } ],
                                    "target" : false,
                                    "url" : "/artikel/integritetspolicy"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Integritetspolicy"
                              } ],
                              "title" : "Dataskydd"
                           }, {
                              "uid" : "CookieSettings",
                              "entries" : [ ],
                              "links" : [ ],
                              "children" : [ ],
                              "title" : "Cookie-inställningar"
                           } ],
                           "title" : "Om oss"
                        }, {
                           "uid" : "WillysCustomerServiceNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Kundservice"
                              } ],
                              "target" : false,
                              "url" : "/artikel/kundservice"
                           } ],
                           "children" : [ {
                              "uid" : "WillysContactNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Kontakta oss"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/kontakta-oss"
                              } ],
                              "children" : [ ],
                              "title" : "Kontakta oss"
                           }, {
                              "uid" : "WillysFAQNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Vanliga frågor & svar"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/vanliga-fragor-och-svar"
                              } ],
                              "children" : [ ],
                              "title" : "Vanliga frågor & svar"
                           }, {
                              "uid" : "WillysWarrantyNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Våra garantier"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/vara-garantier"
                              } ],
                              "children" : [ ],
                              "title" : "Våra garantier"
                           }, {
                              "uid" : "WillysEhandelNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Vår e-handel"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/ehandla"
                              } ],
                              "children" : [ ],
                              "title" : "Vår e-handel"
                           }, {
                              "uid" : "Willys_E-handel_foretag",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "E-handel företag"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/foretag"
                              } ],
                              "children" : [ {
                                 "uid" : "Företagstider",
                                 "entries" : [ ],
                                 "links" : [ {
                                    "external" : false,
                                    "linkName" : [ {
                                       "key" : "sv",
                                       "value" : "Här kan du e-handla som företag"
                                    } ],
                                    "target" : false,
                                    "url" : "/foretagstider"
                                 } ],
                                 "children" : [ ],
                                 "title" : "Här kan du e-handla som företag"
                              } ],
                              "title" : "E-handel företag"
                           }, {
                              "uid" : "WillysECommerceTermsNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Villkor e-handel"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/villkor-e-handel"
                              } ],
                              "children" : [ ],
                              "title" : "Villkor e-handel"
                           }, {
                              "uid" : "WillysWillysPlusTerms2Node",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Villkor Willys Plus"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/villkor-for-willys-plus"
                              } ],
                              "children" : [ ],
                              "title" : "Villkor Willys Plus"
                           }, {
                              "uid" : "Footer_willysappvillkor",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Villkor Willys app"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/kundservice/villkor-for-willys-app"
                              } ],
                              "children" : [ ],
                              "title" : "Villkor Willys app"
                           }, {
                              "uid" : "Tillganglighet",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Tillgänglighetsredogörelse"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/tillganglighet"
                              } ],
                              "children" : [ ],
                              "title" : "Tillgänglighetsredogörelse"
                           } ],
                           "title" : "Kundservice"
                        }, {
                           "uid" : "WillysWorkNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : true,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Jobba hos oss"
                              } ],
                              "target" : true,
                              "url" : "/artikel/jobbahososs"
                           } ],
                           "children" : [ {
                              "uid" : "WillysLedigaTjansterWorkNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : true,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Lediga tjänster"
                                 } ],
                                 "target" : false,
                                 "url" : "https://jobb.axfood.se/willys/go/Willys/3661901/?locale=sv_SE"
                              } ],
                              "children" : [ ],
                              "title" : "Lediga tjänster"
                           }, {
                              "uid" : "WillysUtvecklashosossWorkNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Utvecklas hos oss"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/utvecklashososs"
                              } ],
                              "children" : [ ],
                              "title" : "Utvecklas hos oss"
                           }, {
                              "uid" : "WillysJobbapaWillysWorkNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Jobba på Willys"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/jobbapawillys"
                              } ],
                              "children" : [ ],
                              "title" : "Jobba på Willys"
                           }, {
                              "uid" : "WillysVararollerWorkNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Våra roller"
                                 } ],
                                 "target" : false,
                                 "url" : "/artikel/vararoller"
                              } ],
                              "children" : [ ],
                              "title" : "Våra roller"
                           }, {
                              "uid" : "WillysFAQWorkNode",
                              "entries" : [ ],
                              "links" : [ {
                                 "external" : false,
                                 "linkName" : [ {
                                    "key" : "sv",
                                    "value" : "Frågor & svar om våra jobb"
                                 } ],
                                 "target" : false,
                                 "url" : "https://willys.imbox.help/category/7876/jobba-pa-willys"
                              } ],
                              "children" : [ ],
                              "title" : "Frågor & svar om våra jobb"
                           } ],
                           "title" : "Jobba hos oss"
                        } ]
                     }, {
                        "uid" : "WillysFooterLinksRightNode",
                        "entries" : [ ],
                        "links" : [ ],
                        "children" : [ {
                           "uid" : "WillysFooterCampaignNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Erbjudanden"
                              } ],
                              "target" : false,
                              "url" : "/erbjudanden"
                           } ],
                           "children" : [ ],
                           "title" : "Erbjudanden"
                        }, {
                           "uid" : "WillysFooterStoreFinderNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Hitta butik"
                              } ],
                              "target" : false,
                              "url" : "/butik-sok"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Hitta butik"
                              } ],
                              "target" : false,
                              "url" : "/butik-sok"
                           }, {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Bli Willys Plus-kund"
                              } ],
                              "target" : false,
                              "url" : "https://www.willys.se/registrera/privat/identifiera"
                           } ],
                           "children" : [ ],
                           "title" : "Hitta butik"
                        }, {
                           "uid" : "WillysFooterWillysPlusNode",
                           "entries" : [ ],
                           "links" : [ {
                              "external" : false,
                              "linkName" : [ {
                                 "key" : "sv",
                                 "value" : "Bli Willys Plus-kund"
                              } ],
                              "target" : false,
                              "url" : "https://www.willys.se/registrera/privat/identifiera"
                           } ],
                           "children" : [ ],
                           "title" : "Bli Willys Plus-kund"
                        } ],
                        "title" : "Willys Footer Right Navigation Node"
                     } ],
                     "title" : "Willys Footer Navigation Node"
                  }
               } ]
            }
         }
      }, {
         "key" : "cs_00004KCO",
         "value" : {
            "slotId" : "cs_00004KCO",
            "slotUuid" : "eyJpdGVtSWQiOiJjc18wMDAwNEtDTyIsImNhdGFsb2dJZCI6IndpbGx5c0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==",
            "position" : "TopWide",
            "name" : "Default TopWide for Mina Vanligaste Varor (ny)",
            "slotShared" : false,
            "components" : {
               "component" : [ {
                  "uid" : "comp_00004WPA",
                  "uuid" : "eyJpdGVtSWQiOiJjb21wXzAwMDA0V1BBIiwiY2F0YWxvZ0lkIjoid2lsbHlzQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
                  "typeCode" : "MultiColumnContainerComponent",
                  "name" : "MultiColumn_Mina Vanligaste_Hero",
                  "container" : "false",
                  "hideInApp" : "false",
                  "hideInWeb" : "false",
                  "synchronizationBlocked" : "false",
                  "columnContainerData" : {
                     "uuid" : "eyJpdGVtSWQiOiJDb2x1bW4gMV9NaW5hIFZhbmxpZ2FzdGUgdmFyb3IiLCJjYXRhbG9nSWQiOiJ3aWxseXNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=",
                     "typeCode" : "ColumnComponent",
                     "name" : "Column 1_Mina Vanligaste varor",
                     "container" : "false",
                     "widthPercent" : "100",
                     "cmsComponentTypeCodes" : "[\"HorizontalBannerComponent\"]",
                     "synchronizationBlocked" : "false",
                     "width" : "WIDTH_100",
                     "cmsComponents" : "[\"comp_00004WP7\"]"
                  }
               } ]
            }
         }
      } ]
   },
   "breadcrumbs" : [ ]
}