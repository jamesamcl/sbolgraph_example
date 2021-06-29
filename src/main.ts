
import { Graph, SBOL2GraphView } from 'sbolgraph'

main()

async function main() {

    let url:string = 'https://synbiohub.org/public/igem/BBa_K104001/1/sbol'

    let g:Graph = new Graph()
    let v:SBOL2GraphView = new SBOL2GraphView(g)
   

    console.log('Loading SBOL from ' + url)

    let res = await fetch(url)
    let text = await res.text()

    await v.loadString(text)

    
    for(let cd of v.componentDefinitions) {

        document.write('There is a ComponentDefinition called ' + cd.displayName + '<br/>')
        document.write('It has ' + cd.sequences.length + ' sequences<br/>')

        for(let seq of cd.sequences) {
            document.write(seq.elements + '<br/>')
        }
    }


}

