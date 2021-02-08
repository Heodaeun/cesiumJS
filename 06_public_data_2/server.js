var express = require('express');
var app = express();
var http = require('http').Server(app);
const fs = require('fs');
const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});
var server = http.listen('3000', () => {
    console.log('Application Running: http://localhost:%d', server.address().port);
});

var io = require('socket.io')(server); 
app.use(express.static('public'));

const startTime = "2020-12-01T00:00Z";
const stopTime = "2021-01-01T00:00Z";

var czml = [
  {
    id: "document",
    name: "CZML Custom Properties",
    version: "1.0",
    clock: {
      multiplier: 3600*60,
      interval: "2020-12-01T00:00Z/2021-01-01T00:00Z",
      currentTime: startTime,
      startTime: startTime,
      stopTime: stopTime,
    },
  },
  {
    id: "Dobong-gu",
    name: "Dobong-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0317674,37.6658609,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 20,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Eunpyeong-gu",
    name: "Eunpyeong-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9227004,37.6176125,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Dongdaemun-gu",
    name: "Dongdaemun-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0507003,37.5838012,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Dongjak-gu",
    name: "Dongjak-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9443073,37.4965037,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Geumcheon-gu",
    name: "Geumcheon-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9001546,37.4600969,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Guro-gu",
    name: "Guro-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.858121,37.4954856,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Jongno-gu",
    name: "Jongno-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9861493,37.5990998,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Gangbuk-gu",
    name: "Gangbuk-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0147158,37.6469954,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Jungnang-gu",
    name: "Jungnang-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0939669,37.5953795,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Gangnam-gu",
    name: "Gangnam-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0664091,37.4959854,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Gangseo-gu",
    name: "Gangseo-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.8226561,37.5657617,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Jung-gu",
    name: "Jung-gu",
    properties: {
      population: {
        number: ["2020-12-01T00:00:00Z", 12460]
      }
    },
    position: {
      cartographicDegrees: [126.9941904,37.5579452,0],
    },
    cylinder: {
      length: 000,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Gangdong-gu",
    name: "Gangdong-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.1464824,37.5492077,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Gwangjin-gu",
    name: "Gwangjin-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0857528,37.5481445,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Mapo-gu",
    name: "Mapo-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9087803,37.5622906,0],
    },
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Seocho-gu",
    name: "Seocho-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0378103,37.4769528,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Seongbuk-gu",
    name: "Seongbuk-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0232185,37.606991,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Nowon-gu",
    name: "Nowon-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0771201,37.655264,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Songpa-gu",
    name: "Songpa-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.1144822,37.5048534,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Seodaemun-gu",
    name: "Seodaemun-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9356665,37.5820369,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Yangcheon-gu",
    name: "Yangcheon-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.8561534,37.5270616,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Yeongdeungpo-gu",
    name: "Yeongdeungpo-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9139242,37.520641,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    },
  },
  {
    id: "Gwanak-gu",
    name: "Gwanak-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9438071,37.4653993,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Seongdong-gu",
    name: "Seongdong-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [127.0409622,37.5506753,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
  {
    id: "Yongsan-gu",
    name: "Yongsan-gu",
    properties: {
      population: {
        number: []
      }
    },
    position: {
      cartographicDegrees: [126.9810742,37.5311008,0],
    }, 
    cylinder: {
      length: 0,
      topRadius: 200.0,
      bottomRadius: 200.0,
      material: {
        solidColor: {
          color: {
            rgba: [255, 0, 0, 150],
          },
        },
      },
    }
  },
];

  
// Read csv file
var fp_data = JSON.parse(fs.readFileSync('Floating_population.json', 'utf-8'));

for(var i=0; i<fp_data.length; i++){
  const dataPoint = fp_data[i];
  const date = dataPoint.date.toString();

  const year = date.slice(0,4);
  const month = date.slice(4,6);
  const day = date.slice(6,8);
  const time = dataPoint.time;
  const d =  year + '-' + month + '-' + day + 'T' + time + ':00:00Z';

  const gu = dataPoint.gu;
  const fp = dataPoint.fp;
  
  var j=0;
  while(gu !== czml[j].id){
    j++;        
  }
  var GuObject = czml[j];
  var property = GuObject.properties.population.number;
  property.push(d);
  property.push(fp);
}

io.on('connection', (socket)=> {
  console.log('connected');
  io.emit('init', czml);  
});
