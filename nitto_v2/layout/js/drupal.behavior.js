
var $                 = $ || jQuery;
var Drupal            = Drupal || {};
Drupal.settings       = Drupal.settings || {};
Drupal.settings.theme = Drupal.settings.theme || {};

// If Drupal is not available - we are in slice environment.
if( !Drupal.t )
{

    // Prepare behavior root.
    Drupal.behaviors               = {};
    Drupal.ajax                    = {};
    Drupal.ajax.prototype          = {};
    Drupal.ajax.prototype.commands = {};

    // Implement drupal translate.
    Drupal.t = function(text){ return text; };

    // Act as drupal behavior.
    $(document).ready(function()
    {
        Drupal.behaviors.nitto.attach( $(document), {} );
    });

} /// @if
