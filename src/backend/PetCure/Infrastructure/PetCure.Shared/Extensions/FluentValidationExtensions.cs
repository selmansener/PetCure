using FluentValidation;

namespace PetCure.Shared.Extensions
{
    public static class FluentValidationExtensions
    {
        // TODO: bunu tamamla ya da iptal et
        public static IRuleBuilderOptions<T, string> NotEmptyOptionalString<T>(this IRuleBuilderInitial<T, string> ruleBuilder)
        {
            //ruleBuilder.Must(x => x.Trim() != string.Empty).When(x => x)

            return null;
        }
    }
}
