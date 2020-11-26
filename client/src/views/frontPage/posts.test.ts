import { Post as PostTypes } from "../../types/Post";

const posts:[PostTypes.post] = [
    {
        title: "Test1",
        snippets: [
            {
                language: "javascript",
                content: `test123`
            }
        ]
    },
    {
        title: "Test2",
        snippets: [
            {
                language: "php",
                content: `<?php

$payload = '{ "products": [';
foreach ($products as $product) {
    $payload .= $product->toJson() . ',';
}
$payload = substr($payload, 0, \strlen($payload) - 1);
$payload .= ']}';`
            }
        ]
    },
    {
        title: "Test3",
        snippets: [
            {
                language: "php",
                content: `if (isset(self::$proposals[$view])) {
$best_proposals = [];
$all_sources = [];
foreach (self::$proposals[$view] as $proposal_source => $proposal) {
    if (!isset($this->backend_branch) || substr($this->backend_branch, 0, 11) != "adjust-for:" || substr($this->backend_branch, 11) == $proposal_source) {
    if ($proposal['orig_base'] == $curr_base || $relax_checking) {
        $age = time() - $proposal['updated_at'];
        if ($age < self::MAX_AGE) {
        foreach ($proposal['proposals'] as $proposal_label => $proposal_price) {
            if (!in_array($proposal_label, [self::SK_LABEL_AVIASALES, self::SK_LABEL_SKYSCANNER, self::SK_LABEL_YANDEX, self::SK_LABEL_MOMONDO])) {
            $proposal_key = $proposal_label;
            if (!isset($best_proposals[$proposal_key]) || $best_proposals[$proposal_key]['price'] > $proposal_price) {
                $best_proposals[$proposal_key] = [
                'price' => $proposal_price,
                'name' => $proposal_price . "@" . implode("~", array_map(function ($part) {
                    return preg_replace('/[~|=#@ ]/', '_', $part);
                    }, [
                    'label' => $proposal_label,
                    'source' => $proposal_source,
                    ])),
                'age' => $age,
                ];
                $all_sources[$proposal_source] = null;
            }
            }
        }
        }
    }
    }
}`
            }
        ]
    },
    {
        title: "Test4",
        description: "I'm a description",
        snippets: [
            {
                language: "javascript",
                content: `var show = true;

function toggleShow(){
    if(show === true){
        show = false;
        return show;
    }else{
        show = true;
        return show;
    }
}`
            },
            {
                language: "javascript",
                content: `const anotherSnipper = false;
                
anotherSnippet = "kewl";

// Oh no! Assignment to constant`
            }
        ],
    },
    {
        title: "Yes.",
        snippets: [
            {
                language: "javascript",
                content: `if(wyraz.charAt(i) <"A" 
        && wyraz.charAt(i) != "-" 
            && wyraz.charAt(i)  != " " 
                && wyraz.charAt(i) != "." 
                    && wyraz.charAt(i) != "&" 
                        && wyraz.charAt(i) != "_" 
                            && wyraz.charAt(i) != "\\"" 
                                && wyraz.charAt(i) != "'" 
                
) {                
    if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                return NO; 
}
if(wyraz.charAt(i) >"Z" 
            && wyraz.charAt(i) != "-" 
                && wyraz.charAt(i)  != " " 
                    && wyraz.charAt(i) != "." 
                        && wyraz.charAt(i) != "&" 
                            && wyraz.charAt(i) != "_" 
                                && wyraz.charAt(i) != "\\""
                                    && wyraz.charAt(i) != "'"
)`
            }
        ]
    },
    {
        title: "Learn AngularJS they said...",
        snippets: [
            {
                language: "javascript",
                content: `$scope.$$childHead.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling`
            }
        ]
    },
    {
        title: "Filter is good",
        snippets: [
            {
                language: "js",
                content: `var filter = options.dataSource.filter();

if(e.filter) {
    filter = filter && filter.filters.length ? filter.filters.concat(e.filter.filter) : e.filter.filters;
}
else {
    filter = filter && filter.filters.length ? filter.filters.linqRemove({ field: e.field }) : [];
}
options.dataSource.filter(filter);`
            }
        ]
    },
    {
        title: "Ah yes, switch case in a for loop, a perfect solution",
        description: "Vewy good.",
        snippets: [
            {
                language: "js",
                content: `for(var j=0;j<10;j++){
cell=document.createElement('td');
switch(j)
{
    case 0: 
        var date1 = events[i]['start'];
        var date2 = events[i]['end'];
        cell.appendChild(document.createTextNode(date1.getFullYear()+'/'+date1.getMonth()+'/'+date1.getDate()+' '+date1.getHours()+':'+date1.getMinutes()+' To '+date2.getFullYear()+'/'+date2.getMonth()+'/'+date2.getDate()+' '+date2.getHours()+':'+date2.getMinutes())); 
        break;
    case 1: cell.appendChild(document.createTextNode(events[i]['title'])); break;
    case 2: cell.appendChild(document.createTextNode(events[i]['description'])); break;
}
row.appendChild(cell);
                }`
            }
        ]
    },
    {
        title: "What's LSL?",
        description: "Vewy good.",
        snippets: [
            {
                language: "lsl",
                content: `int min(int a,int b,int c) //Function to return the minimum.
{
    if(a < b)
    {
    if(a < c)return a;
    else if(a > c)return c;
    else return a;
    }
    else if(a > b)
    {
    if(b < c)return b;
    else if(b > c)return c;
    else return b;
    }
    else
    {
    if(a < c) return a;
    else if(a > c) return c;
    else return a;
    }
}
                }`
            }
        ]
    },
    {
        title: "What's LSL?",
        description: "Python such an elegant language",
        snippets: [
            {
                language: "py",
                content: `if (SelectionAndTimeData[1] < 2000 or \
SelectionAndTimeData[2] < 1 or SelectionAndTimeData[2] > 12 or \
SelectionAndTimeData[3] < 1 or SelectionAndTimeData[3] > 31 or \
SelectionAndTimeData[4] < 0 or SelectionAndTimeData[4] > 24 or \
SelectionAndTimeData[5] < 0 or SelectionAndTimeData[5] > 60 or \
SelectionAndTimeData[2] < 0 or SelectionAndTimeData[2] >60):   

print('***************************************************************************')
print(' Entered date is not valid')
print('****************************************************************************')
                }`
            }
        ]
    },
    {
        title: "Test4",
        description: "I'm a description",
        snippets: [
            {
                language: "javascript",
                content: `var show = true;

function toggleShow(){
    if(show === true){
        show = false;
        return show;
    }else{
        show = true;
        return show;
    }
}`
            },
            {
                language: "javascript",
                content: `const anotherSnipper = false;
                
anotherSnippet = "kewl";

// Oh no! Assignment to constant`
            }
        ],
    },
    {
        title: "Yes.",
        snippets: [
            {
                language: "javascript",
                content: `if(wyraz.charAt(i) <"A" 
        && wyraz.charAt(i) != "-" 
            && wyraz.charAt(i)  != " " 
                && wyraz.charAt(i) != "." 
                    && wyraz.charAt(i) != "&" 
                        && wyraz.charAt(i) != "_" 
                            && wyraz.charAt(i) != "\\"" 
                                && wyraz.charAt(i) != "'" 
                
) {                
    if(polska_litera(wyraz.charAt(i) ) == 0 ) 
                return NO; 
}
if(wyraz.charAt(i) >"Z" 
            && wyraz.charAt(i) != "-" 
                && wyraz.charAt(i)  != " " 
                    && wyraz.charAt(i) != "." 
                        && wyraz.charAt(i) != "&" 
                            && wyraz.charAt(i) != "_" 
                                && wyraz.charAt(i) != "\\""
                                    && wyraz.charAt(i) != "'"
)`
            }
        ]
    },
    {
        title: "Learn AngularJS they said...",
        snippets: [
            {
                language: "javascript",
                content: `$scope.$$childHead.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling.$$nextSibling`
            }
        ]
    },
    {
        title: "Filter is good",
        snippets: [
            {
                language: "js",
                content: `var filter = options.dataSource.filter();

if(e.filter) {
    filter = filter && filter.filters.length ? filter.filters.concat(e.filter.filter) : e.filter.filters;
}
else {
    filter = filter && filter.filters.length ? filter.filters.linqRemove({ field: e.field }) : [];
}
options.dataSource.filter(filter);`
            }
        ]
    },
    {
        title: "Ah yes, switch case in a for loop, a perfect solution",
        description: "Vewy good.",
        snippets: [
            {
                language: "js",
                content: `for(var j=0;j<10;j++){
cell=document.createElement('td');
switch(j)
{
    case 0: 
        var date1 = events[i]['start'];
        var date2 = events[i]['end'];
        cell.appendChild(document.createTextNode(date1.getFullYear()+'/'+date1.getMonth()+'/'+date1.getDate()+' '+date1.getHours()+':'+date1.getMinutes()+' To '+date2.getFullYear()+'/'+date2.getMonth()+'/'+date2.getDate()+' '+date2.getHours()+':'+date2.getMinutes())); 
        break;
    case 1: cell.appendChild(document.createTextNode(events[i]['title'])); break;
    case 2: cell.appendChild(document.createTextNode(events[i]['description'])); break;
}
row.appendChild(cell);
                }`
            }
        ]
    },
    {
        title: "What's LSL?",
        description: "Vewy good.",
        snippets: [
            {
                language: "lsl",
                content: `int min(int a,int b,int c) //Function to return the minimum.
{
    if(a < b)
    {
    if(a < c)return a;
    else if(a > c)return c;
    else return a;
    }
    else if(a > b)
    {
    if(b < c)return b;
    else if(b > c)return c;
    else return b;
    }
    else
    {
    if(a < c) return a;
    else if(a > c) return c;
    else return a;
    }
}
                }`
            }
        ]
    },
    {
        title: "What's LSL?",
        description: "Python such an elegant language",
        snippets: [
            {
                language: "py",
                content: `if (SelectionAndTimeData[1] < 2000 or \
SelectionAndTimeData[2] < 1 or SelectionAndTimeData[2] > 12 or \
SelectionAndTimeData[3] < 1 or SelectionAndTimeData[3] > 31 or \
SelectionAndTimeData[4] < 0 or SelectionAndTimeData[4] > 24 or \
SelectionAndTimeData[5] < 0 or SelectionAndTimeData[5] > 60 or \
SelectionAndTimeData[2] < 0 or SelectionAndTimeData[2] >60):   

print('***************************************************************************')
print(' Entered date is not valid')
print('****************************************************************************')
                }`
            }
        ]
    },
];

export default posts;