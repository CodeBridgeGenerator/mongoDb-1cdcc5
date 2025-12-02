import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class Billing {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? projectId;
	 
	@HiveField(2)
	final String? tierName;
	 
	@HiveField(3)
	final String? billingCycle;
	 
	@HiveField(4)
	final String? status;
	 
	@HiveField(5)
	final String? invoiceId;
	 

  Billing({
    this.id,
		this.projectId,
		this.tierName,
		this.billingCycle,
		this.status,
		this.invoiceId
  });

  factory Billing.fromJson(Map<String, dynamic> map) {
    return Billing(
      id: map['_id'] as String?,
			map['projectId'] != null ? projectId : map['projectId'] as String : "",
			map['tierName'] != null ? tierName : map['tierName'] as String : "",
			map['billingCycle'] != null ? billingCycle : map['billingCycle'] as String : "",
			map['status'] != null ? status : map['status'] as String : "",
			map['invoiceId'] != null ? invoiceId : map['invoiceId'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'Billing('_id' : $id,"projectId": $projectId,"tierName": $tierName,"billingCycle": $billingCycle,"status": $status,"invoiceId": $invoiceId)';
}