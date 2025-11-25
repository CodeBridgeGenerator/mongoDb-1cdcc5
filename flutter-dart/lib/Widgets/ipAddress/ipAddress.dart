import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class IpAddress {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? projectId;
	 
	@HiveField(2)
	final String? ipAddress;
	 
	@HiveField(3)
	final String? status;
	 

  IpAddress({
    this.id,
		this.projectId,
		this.ipAddress,
		this.status
  });

  factory IpAddress.fromJson(Map<String, dynamic> map) {
    return IpAddress(
      id: map['_id'] as String?,
			map['projectId'] != null ? projectId : map['projectId'] as String : "",
			map['ipAddress'] != null ? ipAddress : map['ipAddress'] as String : "",
			map['status'] != null ? status : map['status'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'IpAddress('_id' : $id,"projectId": $projectId,"ipAddress": $ipAddress,"status": $status)';
}