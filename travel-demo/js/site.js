function getMbox3rdPartyIdParameter() {
    var hash = $.cookie('mbox3rdPartyId');

    if (hash) {
        return "mbox3rdPartyId=" + hash;      
    } else {
        return "";
    }   
}
