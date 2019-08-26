/* Simple, remove the spaces from the string, then return the resultant string. */

fun noSpace(x: String): String {
  return x.replace("\\s".toRegex(), "")
}