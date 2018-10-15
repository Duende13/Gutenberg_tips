
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
        // Primer ejemplo con Dashicon forms https://developer.wordpress.org/resource/dashicons/#forms
        icon: 'forms',
        // Segundo ejemplo con Dashicon admin-site https://developer.wordpress.org/resource/dashicons/#admin-site
        //icon: 'admin-site',
        keywords: [
            __( 'Prueba' ),
            __( 'Primer Ejemplo' ),
            __( 'Bloque ejemplo' ),
        ],
        edit: props => {
            return <div className={props.className}>
                { blockHeader }
            </div>;
        },
        save: props => {
            return (
                <div className={ props.className }>
                    <div className="my-content">
                      { blockHeader }
                    </div>
                </div>
            );
        },
    },
);
