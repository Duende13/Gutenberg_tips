<?php
/**
 * Plugin Name: cursobloqueswp - Consejos
 * Plugin URI: https://cursobloqueswp.com
 * Description: Plugin que contiene bloques de ejemplo para desarrolladores del curso <a href="https://wwww.cursobloqueswp.com">Aprende a programar Bloques</a>.
 * Author: Susana Ruiz
 * Author URI: https://susanaruiz.tech
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package cursobloqueswp
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Encolar nuestro JavaScript and CSS en la parte de edición
 */
function cursobloqueswp_editor_scripts()
{

    // Hacemos variables de los paths así no las duplicamos
    $bloquePath = '/utils/js/editor.bloques.js';
    $editorStylePath = '/utils/css/bloques.editor.css';

    // Encolamos el JavaScript para nuestro bloque en la parte de Edición
    wp_enqueue_script(
        'cursobloqueswp-js',
        plugins_url( $bloquePath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks','wp-editor', 'wp-components', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $bloquePath )
    );

    // Encolamos los estilos sólo para la parte de Edición, totalmente Opcional
    wp_enqueue_style(
        'cursobloqueswp-css',
        plugins_url( $editorStylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
    );

}

// Añadimos nuestros Scripts y estilos SÓLO de la parte de Edición con el nuevo hook
add_action( 'enqueue_block_editor_assets', 'cursobloqueswp_editor_scripts' );


/**
 * Encolar nuestro JavaScript and CSS en la parte de edición y publicación
 */
function cursobloqueswp_scripts()
{
    // Hacemos variables de los paths así no las duplicamos
    $bloquePath = '/utils/js/frontend.bloques.js';
    $stylePath = '/utils/css/bloques.style.css';

    // Encolamos nuestros scripts
    wp_enqueue_script(
        'cursobloqueswp-bloques-frontend-js',
        plugins_url( $bloquePath, __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-editor','wp-components', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $bloquePath )
    );

    // Encolamos nuestros estilos de bloque de la parte de edición y publicación
    wp_enqueue_style(
        'cursobloqueswp-bloques-css',
        plugins_url($stylePath, __FILE__),
        [ 'wp-blocks' ],
        filemtime(plugin_dir_path(__FILE__) . $stylePath )
    );


}

// Añadimos nuestros Scripts y estilos de la parte de Edición  y publicación con el nuevo hook
add_action('enqueue_block_assets', 'cursobloqueswp_scripts');
