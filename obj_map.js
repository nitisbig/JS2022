const item = [
    {
        name: 'Oxford Dictonary',
        definitions: [
            {
                name:'OXFORD DEFINITION'
            },
            {
                name: '1.Definition',
                definition:'First definition'
            },
            {
                name: '2.Definition',
                definition:'Second definition'
            },
            {
                name: '3.Definition',
                definition:'Third definition'
            }
        ]
    },
    {
        name: 'Stanford Dictonary',
        definitions: [
            {
                name:'STANFORD DEFINITION'
            },
            {
                name: '1.Definition',
                definition:'First definition'
            },
            {
                name: '2.Definition',
                definition:'Second definition'
            },
            {
                name: '3.Definition',
                definition:'Third definition'
            }
        ]
    },
    {
        name: 'MIT Dictonary',
        definitions: [
            {
                name:'MIT DEFINITION'
            },
            {
                name: '1.Definition',
                definition:'First definition'
            },
            {
                name: '2.Definition',
                definition:'Second definition'
            },
            {
                name: '3.Definition',
                definition:'Third definition'
            }
        ]
    },
    {
        name: 'Yale Dictonary',
        definitions: [
            {
                name:'definitons'
            },
            {
                name: 'Definition',
                definition:[
                    'First definiton','Second Definition','Third definition'
                ]
            }
        ]
    }
]

item.map(item=>{
    item.definitions.map(item=>{
        console.log(item.name)
        console.log(item.definition)
        
    })
})