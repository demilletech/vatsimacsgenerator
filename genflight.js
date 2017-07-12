function genFlight(lat,lng,altitude)
{
    var callsign = newAircraft();
    var squawk = 3001;
    // Spacer
    var heading = 010;
    if(!altitude){
        var alt = 27; //Field elevation.
    }else{
        var alt = altitude; //Pulls from the altitude input.
    }
    var gs = 1;
    var cdr = 1800;
    var type = "I"; // IFR (I) or VFR (V)
    // Newline
    var actype = genICAO();
    var cruisespeed = 400;
    var depaprt = "KJFK";
    var deptime = 1755;
    var randNum = Math.ceil(Math.random() * 10);
    var cruisealt = 30000 + randNum * 1000;
    var arraprt = genAirport();
    var enroutehrs = 4;
    var enroutemins = 50;
    // Newline
    var routeData = getRoute(depaprt, arraprt);
    var route = "DIRECT";
    
    if (routeData != null)
    {
        route = routeData[1];
        if (routeData[3] != "")
        {
            cruisealt = routeData[3];
        }
    }
    
    var voicetype = "/v/";
    
    // AAL123:B190/A:T:V:KBTV:KMHT:15500:BTV MPV LEB MHT:/V/VFR/CHARTS:1200:S:44.46370:-73.15221:335:0:360
    // Callsign:Type:Engine:Rules:Dep Field:Arr Field:Crz Alt:Route:Remarks:Sqk Code:Sqk Mode:Lat:Lon:Alt:Speed:Heading
    
    var out = callsign + ":" + actype + "/L:J:" + type + ":" + depaprt + ":" + arraprt + ":" + 
        cruisealt + ":" + route + ":" + voicetype + ":" + squawk + ":S:" + lat + ":" + lng + ":" +
        alt + ":" + gs + ":" + heading;
    return out;
}
