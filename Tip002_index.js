

import './style.scss';
import './editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const blockHeader = <h2>{ __( 'Código de ejemplo para personalizar el icono de tu bloque con Dashicon' ) }</h2>;
const { RichText } = wp.editor;

/**
 * RegisterBlockType - Primer Ejemplo
 */
export default registerBlockType(
    'cursobloqueswp/rbt-primer-ejemplo',
    {
        title: __( 'registerBlockType - Demo' ),
        category: 'common',
        description: __('Código de ejemplo para personalizar el icono de tu bloque con Dashicon'),
        // Primer ejemplo con Dashicon forms
        icon: 'forms',
        // Segundo ejemplo con Dashicon admin-site
        //icon: 'admin-site',
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
