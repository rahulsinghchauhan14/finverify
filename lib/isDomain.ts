import * as http from "http";
  
export default function isDomain(domain: string | undefined) : boolean {
    let result = false;
    http.get(`http://${domain}`, (res) => {
        //console.log(`Ping to ${domain} successful`);
        result = true;
    }).on("error", (err) => {
        //console.error(`Ping to ${domain} failed: ${err.message}`);
        result = false;
    });

    return result;
}