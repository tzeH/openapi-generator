//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'outer_enum_integer_default_value.g.dart';

class OuterEnumIntegerDefaultValue extends EnumClass {

  @BuiltValueEnumConst(wireNumber: 0)
  static const OuterEnumIntegerDefaultValue number0 = _$number0;
  @BuiltValueEnumConst(wireNumber: 1)
  static const OuterEnumIntegerDefaultValue number1 = _$number1;
  @BuiltValueEnumConst(wireNumber: 2)
  static const OuterEnumIntegerDefaultValue number2 = _$number2;
  @BuiltValueEnumConst(wireNumber: 11184809, fallback: true)
  static const OuterEnumIntegerDefaultValue unknownDefaultOpenApi = _$unknownDefaultOpenApi;

  static Serializer<OuterEnumIntegerDefaultValue> get serializer => _$outerEnumIntegerDefaultValueSerializer;

  const OuterEnumIntegerDefaultValue._(String name): super(name);

  static BuiltSet<OuterEnumIntegerDefaultValue> get values => _$values;
  static OuterEnumIntegerDefaultValue valueOf(String name) => _$valueOf(name);
}

/// Optionally, enum_class can generate a mixin to go with your enum for use
/// with Angular. It exposes your enum constants as getters. So, if you mix it
/// in to your Dart component class, the values become available to the
/// corresponding Angular template.
///
/// Trigger mixin generation by writing a line like this one next to your enum.
abstract class OuterEnumIntegerDefaultValueMixin = Object with _$OuterEnumIntegerDefaultValueMixin;

