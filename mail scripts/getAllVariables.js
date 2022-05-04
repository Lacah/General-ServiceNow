(function runMailScript( /* GlideRecord */ current, /* TemplatePrinter */ template,
    /* Optional EmailOutbound */
    email, /* Optional GlideRecord */ email_action,
    /* Optional GlideRecord */
    event) {

    template.print("<p></p>Requested item: ");
    printVars();

    function printVars() {
        var set = new GlideappVariablePoolQuestionSet();
        set.setRequestID(current.getValue('sys_id'));
        set.load();
        template.print(current.getDisplayValue('cat_item') + "\n");
        template.print("\n");
        var vs = set.getFlatQuestions();
        for (var i = 0; i < vs.size(); i++) {
            if (vs.get(i).getLabel() != '') {
                if (vs.get(i).getDisplayValue() != '') {
//                     template.space(6);
                    template.print(vs.get(i).getLabel() + " : " + vs.get(i).getDisplayValue() + "<br/>");
                }
            }
        }
    }

})(current, template, email, email_action, event);
