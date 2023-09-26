<?php
/*
Plugin Name: Add Device Type and Browser Type to Body Classes
Description: This powerful WordPress plugin automatically adds custom classes to the <body> tag of your website, allowing you to fine-tune your site's appearance and functionality based on the user's device, browser, and tablet type. Effortlessly style and optimize your content for various devices, including iPhones, iPads, Android phones, desktops, and popular browsers like Firefox, Chrome, and Safari. With enhanced tablet detection, you can create a tailored user experience for tablet users, improving engagement and user satisfaction. Take control of your site's responsiveness with Device and Browser Body Classes.
Version: 1.0
Author: Shahid Hussain
Author URI: https://github.com/ShahidHussain75
*/
/*
Features:
- Device Detection: Identify devices as mobile, tablet, or desktop.
- Browser Detection: Detect popular browsers like Firefox, Chrome, and Safari.
- Tablet Detection: Improved tablet type detection for a better user experience.
- Orientation Detection: Detect tablet screen orientation (portrait or landscape)

****************************************************************************************

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
 */

// Enqueue the custom JavaScript file
function add_custom_body_classes_script() {
    wp_enqueue_script('custom-body-classes', plugin_dir_url(__FILE__) . 'custom-html-classes.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'add_custom_body_classes_script');