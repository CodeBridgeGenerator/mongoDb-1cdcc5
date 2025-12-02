import 'dart:convert';
import 'package:hive/hive.dart';

@HiveType(typeId: 3)

class ProjectEnv {
  @HiveField(0)
	final String? id;
	 
	@HiveField(1)
	final String? env;
	 
	@HiveField(2)
	final String? envName;
	 

  ProjectEnv({
    this.id,
		this.env,
		this.envName
  });

  factory ProjectEnv.fromJson(Map<String, dynamic> map) {
    return ProjectEnv(
      id: map['_id'] as String?,
			map['env'] != null ? env : map['env'] as String : "",
			map['envName'] != null ? envName : map['envName'] as String : ""
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id' : id
    };
}

  @override
  String toString() => 'ProjectEnv('_id' : $id,"env": $env,"envName": $envName)';
}