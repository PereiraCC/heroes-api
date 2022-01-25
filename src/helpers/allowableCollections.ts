export const allowableCollections = ( collection : string = '', collections : Array<string> = []) => {

    const included : boolean = collections.includes( collection );

    if( !included ) {
        throw new Error(`The collection: ${ collection } is not allowed, Collections: ${collections}`);
    }
    return true;

}