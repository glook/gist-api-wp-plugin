<?php

use Pinchoalex\SocialPatch\SocialPatch;

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://spatch.store
 * @since             1.0.0
 * @package           SocialPatch
 *
 * @wordpress-plugin
 * Plugin Name:       Social Patch
 * Plugin URI:        https://spatch.store
 * Description:       Social Patch is a powerful tool that allows users to aggregate data from various social media platforms in one place.
 * Version:           1.0.0
 * Author:            Alex Pinkevych
 * Author URI:        https://spatch.store
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       social-patch
 * Domain Path:       /languages
 */

require_once ABSPATH . '/wp-admin/includes/plugin.php';

// Import vendor
$autoloadPath = __DIR__ . '/vendor/autoload.php';

if (!file_exists($autoloadPath)) {
    deactivate_plugins(plugin_basename(__FILE__));
    wp_die('Main autoloader file is not exist');
}

require_once $autoloadPath;
// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('AP_YOUTUBE_VERSION', '1.0.0');
define('AP_YOUTUBE_NAME', 'social_patch');
define('AP_YOUTUBE_PLUGIN_PATH', __DIR__);
define('AP_YOUTUBE_PLUGIN_URL', plugin_dir_url( __FILE__ ));

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-ap-youtube-activator.php
 */
function activateSocialPatch()
{

}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-ap-youtube-deactivator.php
 */
function deactivateSocialPatch()
{

}

register_activation_hook(__FILE__, 'activateSocialPatch');
register_deactivation_hook(__FILE__, 'deactivateSocialPatch');
function runSocialPatch()
{
    $plugin = new SocialPatch();
    $plugin->run();
}

runSocialPatch();
