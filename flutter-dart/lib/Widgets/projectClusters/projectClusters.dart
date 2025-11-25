import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class ProjectClusters {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? projectId;
	 
	@HiveField(2)
	final String? clusterName;
	 
	@HiveField(3)
	final String? tierName;
	 
	@HiveField(4)
	final String? provider;
	 
	@HiveField(5)
	final String? region;
	 
	@HiveField(6)
	final String? status;
	 

  ProjectClusters({
    this.id,
		this.projectId,
		this.clusterName,
		this.tierName,
		this.provider,
		this.region,
		this.status
  });

  factory ProjectClusters.fromJson(Map<String, dynamic> map) {
    return ProjectClusters(
      id: map['_id'] as String?,
			map['projectId'] != null ? projectId : map['projectId'] as String : "",
			map['clusterName'] != null ? clusterName : map['clusterName'] as String : "",
			map['tierName'] != null ? tierName : map['tierName'] as String : "",
			map['provider'] != null ? provider : map['provider'] as String : "",
			map['region'] != null ? region : map['region'] as String : "",
			map['status'] != null ? status : map['status'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'ProjectClusters('_id' : $id,"projectId": $projectId,"clusterName": $clusterName,"tierName": $tierName,"provider": $provider,"region": $region,"status": $status)';
}