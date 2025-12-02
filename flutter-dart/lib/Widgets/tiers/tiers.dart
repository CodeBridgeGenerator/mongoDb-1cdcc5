import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class Tiers {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? tierName;
	 
	@HiveField(2)
	final String? storage;
	 
	@HiveField(3)
	final String? ram;
	 
	@HiveField(4)
	final String? vCpu;
	 
	@HiveField(5)
	final String? basePrice;
	 
	@HiveField(6)
	final String? markedUpPrice;
	 
	@HiveField(7)
	final String? finalPrice;
	 

  Tiers({
    this.id,
		this.tierName,
		this.storage,
		this.ram,
		this.vCpu,
		this.basePrice,
		this.markedUpPrice,
		this.finalPrice
  });

  factory Tiers.fromJson(Map<String, dynamic> map) {
    return Tiers(
      id: map['_id'] as String?,
			map['tierName'] != null ? tierName : map['tierName'] as String : "",
			map['storage'] != null ? storage : map['storage'] as String : "",
			map['ram'] != null ? ram : map['ram'] as String : "",
			map['vCpu'] != null ? vCpu : map['vCpu'] as String : "",
			map['basePrice'] != null ? basePrice : map['basePrice'] as String : "",
			map['markedUpPrice'] != null ? markedUpPrice : map['markedUpPrice'] as String : "",
			map['finalPrice'] != null ? finalPrice : map['finalPrice'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'Tiers('_id' : $id,"tierName": $tierName,"storage": $storage,"ram": $ram,"vCpu": $vCpu,"basePrice": $basePrice,"markedUpPrice": $markedUpPrice,"finalPrice": $finalPrice)';
}