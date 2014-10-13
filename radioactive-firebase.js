(function(){
    var cells = {};
    Firebase.prototype.get = function(){
        var url = this.toString();
        var ref = this;
        return ( cells[url] || (cells[url] = (function(){
            var cell = radioactive( new radioactive.PendingSignal );
            ref.on('value', function( snap ){ cell( snap.val() ) });
            return cell;
        })()))()
    }
})();