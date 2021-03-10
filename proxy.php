header('Content-type: application/xml');


$c = $_GET['a'];
    if ($c=='pjm'){
        $url = 'https://steamcommunity.com/id/gigliotti07/inventory/json/730/2';
        }else{
        $url = 'http://www.json-generator.com/api/json/get/cftLKcymgi?indent=2';
        }
$handle = fopen($url, "r");

if ($handle){
    while (!feof($handle)){ $buffer = fgets($handle, 4096);
        echo $buffer;
        }
     
    }
    

