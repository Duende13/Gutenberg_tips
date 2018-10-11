//Puedes añadir tu código svg en un archivo aparte para que tu código sea más mantenible
//Sólo tienes que hacer referencia a "icono" en la propiedad icon de registerBlockType 
//import icono from './icon';

// Constante con icono en forma svg
const blockIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>;
// Ejemplo simple con un circulo svg
//<svg width="20" height="20"><circle cx="10" cy="10" r="8" stroke="black" strokeWidth="2" fill="white" /></svg>;

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const blockHeader = <h2>{ __( 'Código de ejemplo decomo personalizar un icono con svg en tu bloque' ) }</h2>;
const { RichText } = wp.editor;

/**
 * RegisterBlockType -
 */
export default registerBlockType(
    'cursobloqueswp/rbt-primer-ejemplo',
    {
        title: __( 'registerBlockType - Demo' ),
        category: 'common',
        description: __('Código de ejemplo decomo personalizar un icono con svg en tu bloque'),
        // En icon ponemos el nombre de la variable que hemos declarado arriba
        icon: blockIcon,
        // Tambien puedes añadir el codigo svg directamente pero pierdes legibilidad, mejor constante o archivo aparte
        //icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/></svg>,
        // Si has incluido un archivo con tu código svg no olvides importarlo arriba y referenciarlo en icon
        //icon: icono, 
        keywords: [
            __( 'Prueba' ),
            __( 'Primer Ejemplo' ),
            __( 'Bloque ejemplo' ),
        ],
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: 'div.my-content',
            },
        },
        edit: props => {
            const onChangeContent = value => {
                props.setAttributes( { content: value } );
            };
            return <div className={props.className}>
                { blockHeader }
                <RichText
                    tagname="div"
                    multiline="p"
                    className="my-content"
                    placeholder={ __( 'Introduce tu ipsum aquí..' ) }
                    value={ props.attributes.content }
                    onChange={ onChangeContent }
                />
            </div>;
        },
        save: props => {
            return (
                <div className={ props.className }>
                    <div className="my-content">
                      { props.attributes.content }
                    </div>
                </div>
            );
        },
    },
);
