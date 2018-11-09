
import { SBOL2Graph } from 'sbolgraph'

main()

async function main() {

    let url:string = 'https://synbiohub.org/public/igem/BBa_K104001/1/BBa_K104001.xml'

    console.log('Loading SBOL from ' + url)
    let g = await SBOL2Graph.loadURL(url)

    for(let cd of g.componentDefinitions) {

        document.write('There is a ComponentDefinition called ' + cd.displayName + '<br/>')
        document.write('It has ' + cd.sequences.length + ' sequences<br/>')

        for(let seq of cd.sequences) {
            document.write(seq.elements + '<br/>')
        }
    }



}

