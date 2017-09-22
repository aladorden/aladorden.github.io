(function() {
    "use strict";

    /**
     * Переводит base-64 представление в строку.
     * @param str
     * @returns {string}
     */
    function b64_to_utf8( str ) {
        return decodeURIComponent(window.atob(str));
    }

    
    $(function() {
        AddressSuggestions.init(
            $("#address"),
            [$("#address-region"), $("#address-city"), $("#address-street"), $("#address-house")]
        );
		 AddressSuggestions.init(
            $("#address2"),
            [$("#address-region"), $("#address-city"), $("#address-street"), $("#address-house")]
        );
		
        AddressSuggestions.init(
            $("#address3"),
            [$("#address-region"), $("#address-city"), $("#address-street"), $("#address-house")]
        );
		AddressSuggestions.init(
            $("#address4"),
            [$("#address-region"), $("#address-city"), $("#address-street"), $("#address-house")]
        );

        var $form = $("#feedback-form");
        var $btnSubmit = $form.find("button[type='submit']");
        var $progress = $("#feedback-progress");
        var $message = $("#feedback-message");

        var phoneField = new ValidatedField("#phone", "PHONE", function(validatedObj) {
            return validatedObj.phone;
        });

        var emailField = new ValidatedField("#email", "EMAIL", function(validatedObj) {
            return validatedObj.email;
        });

        $message.find("[data-action='ok']").click(function() {
            $message.hide();
        });

        $form.submit(function(e) {
            e.preventDefault();
            $btnSubmit.hide();
            $message.hide();
            $progress.parent().show();
            var progressVal = 5;
            var timer;
            var setProgress = function(val) {
                progressVal = val;
                $progress.css('width', val+'%');
            };
            var forward = function() {
                setProgress(progressVal+5);
                if(progressVal < 100) {
                    timer = setTimeout(forward, 100)
                } else {
                    $progress.parent().hide();
                    setProgress(0);
                    $btnSubmit.show();
                    showSubmitMessage($message);
                }
            };
            timer = setTimeout(forward, 100);

        });
    });

})();